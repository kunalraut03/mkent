import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './EnquiryForm.css';

const EnquiryForm = ({ products = [], partnerName, source }) => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        Name: '',
        Phone: '',
        City: '',
        Category: '',
        'Interested Products': [],
        Requirement: ''
    });
    // Initialize crops with one empty row
    const [cropRows, setCropRows] = useState([{ crop: '', area: '' }]);
    const [citySuggestions, setCitySuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [status, setStatus] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Placeholder URL - User needs to replace this
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycby99sGoFXCpWTmw9CrjIHkn68k5nyJHc5tNEGdqJincn7v9Bjq3uA9tUJ9M7lpv0C0hmg/exec";

    const categories = [
        t('enquiry.category.farmer'),
        t('enquiry.category.dealer'),
        t('enquiry.category.enterprise'),
        t('enquiry.category.greenhouse'),
        t('enquiry.category.institutional')
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name === 'Name') {
            // Only allow alphabets and spaces
            if (value === '' || /^[A-Za-z\s]+$/.test(value)) {
                setFormData(prev => ({ ...prev, [name]: value }));
            }
            return;
        }

        if (name === 'Phone') {
            // Only allow numbers
            if (value === '' || /^\d+$/.test(value)) {
                if (value.length <= 10) {
                    setFormData(prev => ({ ...prev, [name]: value }));
                }
            }
            return;
        }

        if (name === 'City') {
            setFormData(prev => ({ ...prev, [name]: value }));
            if (value.length > 2) {
                fetchCitySuggestions(value);
            } else {
                setCitySuggestions([]);
                setShowSuggestions(false);
            }
            return;
        }

        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const fetchCitySuggestions = async (query) => {
        try {
            const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${query}&countrycodes=in&limit=5`);
            const data = await response.json();
            setCitySuggestions(data);
            setShowSuggestions(true);
        } catch (error) {
            console.error("Error fetching cities:", error);
        }
    };

    const selectCity = (city) => {
        setFormData(prev => ({ ...prev, City: city.display_name }));
        setCitySuggestions([]);
        setShowSuggestions(false);
    };

    const handleCropChange = (index, field, value) => {
        if (field === 'area') {
            // Allow numbers and single decimal point
            if (value === '' || /^\d*\.?\d*$/.test(value)) {
                const newRows = [...cropRows];
                newRows[index][field] = value;
                setCropRows(newRows);
            }
        } else {
            const newRows = [...cropRows];
            newRows[index][field] = value;
            setCropRows(newRows);
        }
    };

    const addCropRow = () => {
        setCropRows([...cropRows, { crop: '', area: '' }]);
    };

    const removeCropRow = (index) => {
        if (cropRows.length > 1) {
            const newRows = cropRows.filter((_, i) => i !== index);
            setCropRows(newRows);
        }
    };

    const handleProductChange = (e) => {
        const { value, checked } = e.target;
        setFormData(prev => {
            const currentProducts = prev['Interested Products'];
            if (checked) {
                return { ...prev, 'Interested Products': [...currentProducts, value] };
            } else {
                return { ...prev, 'Interested Products': currentProducts.filter(p => p !== value) };
            }
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation
        if (formData.Phone.length !== 10) {
            alert(t('enquiry.validation.phone'));
            return;
        }

        if (!formData.Category) {
            alert(t('enquiry.validation.category'));
            return;
        }

        setIsSubmitting(true);
        setStatus('');

        if (GOOGLE_SCRIPT_URL.includes("YOUR_GOOGLE_SCRIPT_URL")) {
            setStatus('error');
            alert("Backend URL not configured. Please deploy the Google Apps Script and update the URL.");
            setIsSubmitting(false);
            return;
        }

        // Format Crops and Area for sheet
        const cropsString = cropRows
            .filter(row => row.crop.trim() !== '')
            .map(row => `${row.crop} (${row.area || 'N/A'})`)
            .join('; ');

        const areaString = cropRows
            .filter(row => row.area.trim() !== '')
            .map(row => row.area)
            .join(', ');

        const formBody = new FormData();
        formBody.append('Name', formData.Name);
        formBody.append('Phone', formData.Phone);
        formBody.append('City', formData.City);
        formBody.append('Category', formData.Category);
        formBody.append('Source', source || 'Website'); // Track source page

        // Map consolidated string to 'Crops' column or however the script expects it.
        // Script expects 'Area' and 'Crops'.
        formBody.append('Area', areaString); // Just raw areas list
        formBody.append('Crops', cropsString); // Detailed "Crop (Area)" list

        formBody.append('Interested Products', formData['Interested Products'].join(', '));
        formBody.append('Requirement', formData.Requirement);

        try {
            const response = await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                body: formBody
            });
            const result = await response.json();

            if (result.result === 'success') {
                setStatus('success');
                setFormData({
                    Name: '',
                    Phone: '',
                    City: '',
                    Category: '',
                    'Interested Products': [],
                    Requirement: ''
                });
                setCropRows([{ crop: '', area: '' }]);
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Error!', error.message);
            setStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="enquiry-form-container">
            <motion.div
                className="enquiry-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <h3>{t('enquiry.title')} {partnerName}</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>{t('enquiry.name')}</label>
                        <input
                            type="text"
                            name="Name"
                            value={formData.Name}
                            onChange={handleInputChange}
                            required
                            placeholder={t('enquiry.namePlaceholder')}
                        />
                    </div>

                    <div className="form-group">
                        <label>{t('enquiry.phone')}</label>
                        <input
                            type="tel"
                            name="Phone"
                            value={formData.Phone}
                            onChange={handleInputChange}
                            required
                            placeholder={t('enquiry.phonePlaceholder')}
                            maxLength="10"
                        />
                    </div>

                    <div className="form-group" style={{ position: 'relative' }}>
                        <label>{t('enquiry.city')}</label>
                        <input
                            type="text"
                            name="City"
                            value={formData.City}
                            onChange={handleInputChange}
                            required
                            placeholder={t('enquiry.cityPlaceholder')}
                            autoComplete="off"
                        />
                        {showSuggestions && citySuggestions.length > 0 && (
                            <div className="city-suggestions">
                                {citySuggestions.map((place, idx) => (
                                    <div
                                        key={idx}
                                        className="city-suggestion-item"
                                        onClick={() => selectCity(place)}
                                    >
                                        {place.display_name}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="form-group">
                        <label>{t('enquiry.iam')}</label>
                        <div className="radio-group">
                            {categories.map((cat, idx) => (
                                <label key={idx} className={`radio-label ${formData.Category === cat ? 'selected' : ''}`}>
                                    <input
                                        type="radio"
                                        name="Category"
                                        value={cat}
                                        checked={formData.Category === cat}
                                        onChange={handleInputChange}
                                    />
                                    <Leaf
                                        size={20}
                                        className="radio-icon"
                                        fill={formData.Category === cat ? "currentColor" : "none"}
                                        strokeWidth={formData.Category === cat ? 0 : 2}
                                    />
                                    {cat}
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="form-group">
                        <label>{t('enquiry.cropsDetails')}</label>
                        {cropRows.map((row, idx) => (
                            <div key={idx} className="crop-row" style={{ display: 'flex', gap: '1rem', marginBottom: '0.5rem' }}>
                                <div style={{ flex: 1 }}>
                                    <input
                                        type="text"
                                        placeholder={t('enquiry.cropName')}
                                        value={row.crop}
                                        onChange={(e) => handleCropChange(idx, 'crop', e.target.value)}
                                        style={{ width: '100%' }}
                                    />
                                </div>
                                <div style={{ flex: 1 }}>
                                    <input
                                        type="text"
                                        placeholder={t('enquiry.areaAcres')}
                                        value={row.area}
                                        onChange={(e) => handleCropChange(idx, 'area', e.target.value)}
                                        style={{ width: '100%' }}
                                    />
                                </div>
                                {cropRows.length > 1 && (
                                    <button
                                        type="button"
                                        onClick={() => removeCropRow(idx)}
                                        className="remove-row-btn"
                                        style={{
                                            padding: '0 0.8rem',
                                            background: '#ef4444',
                                            border: 'none',
                                            color: 'white',
                                            borderRadius: '8px',
                                            cursor: 'pointer',
                                            height: '42px' // Match input height roughly
                                        }}
                                    >
                                        ✕
                                    </button>
                                )}
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={addCropRow}
                            className="add-row-btn"
                            style={{
                                background: 'transparent',
                                border: '1px dashed rgba(255,255,255,0.3)',
                                color: 'var(--text-secondary)',
                                width: '100%',
                                padding: '0.8rem',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                fontSize: '0.9rem',
                                marginTop: '0.5rem'
                            }}
                        >
                            {t('enquiry.addCrop')}
                        </button>
                    </div>

                    <div className="form-group">
                        <label>{t('enquiry.interestedProducts')}</label>
                        <div className="checkbox-group">
                            {products.map((product, idx) => (
                                <label key={idx} className="checkbox-label">
                                    <input
                                        type="checkbox"
                                        value={typeof product === 'string' ? product : product.title}
                                        checked={formData['Interested Products'].includes(typeof product === 'string' ? product : product.title)}
                                        onChange={handleProductChange}
                                    />
                                    <span className="checkmark"></span>
                                    {typeof product === 'string' ? product : product.title}
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="form-group">
                        <label>{t('enquiry.requirement')}</label>
                        <textarea
                            name="Requirement"
                            value={formData.Requirement}
                            onChange={handleInputChange}
                            placeholder={t('enquiry.requirementPlaceholder')}
                            rows="4"
                        ></textarea>
                    </div>

                    <button type="submit" className="submit-btn" disabled={isSubmitting}>
                        {isSubmitting ? t('enquiry.sending') : t('enquiry.submit')}
                    </button>

                    {status === 'success' && <p className="success-msg">{t('enquiry.success')}</p>}
                    {status === 'error' && <p className="error-msg">{t('enquiry.error')}</p>}
                </form>
            </motion.div>
        </div>
    );
};

export default EnquiryForm;
