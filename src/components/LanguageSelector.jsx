import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import './LanguageSelector.css';

const LanguageSelector = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="language-selector">
            <Globe size={20} className="lang-icon" />
            <select
                onChange={(e) => changeLanguage(e.target.value)}
                value={i18n.language}
                className="lang-select"
            >
                <option value="en">English</option>
                <option value="mr">मराठी (Marathi)</option>
                <option value="hi">हिंदी (Hindi)</option>
            </select>
        </div>
    );
};

export default LanguageSelector;
