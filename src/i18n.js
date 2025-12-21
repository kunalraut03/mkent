import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    en: {
        translation: {
            "nav": {
                "home": "Home",
                "partners": "Partners",
                "contact": "Contact Us",
                "useCases": "Use Cases"
            },
            "hero": {
                "empowering": "Empowering Agriculture with",
                "solutions": "Solutions",
                "trustedPartner": "Your trusted partner for Agriplast, Fasal, and Map My Crop. Delivering sustainable solutions for modern farming.",
                "getStarted": "Get Started",
                "ourPartners": "Our Partners"
            },
            "footer": {
                "reliableStockist": "Reliable stockist for Agriplast, Fasal, and Map My Crop. Delivering premium agricultural solutions to empower farmers and businesses.",
                "quickLinks": "Quick Links",
                "contactUs": "Contact Us",
                "visitUs": "Visit Us",
                "callUs": "Call Us",
                "emailUs": "Email Us",
                "rights": "All rights reserved."
            },
            "contact": {
                "getInTouch": "Get in Touch",
                "subText": "We'd love to hear from you. Reach out for any inquiries about Agriplast, Fasal, or Map My Crop.",
                "infoTitle": "Contact Information",
                "businessHours": "Business Hours",
                "monSat": "Mon - Sat: 10:00 AM - 6:00 PM",
                "sunday": "Sunday: Closed",
                "whyContact": "How No1 Agritech can help you:",
                "reasons": {
                    "product": "Product Enquiry",
                    "dealership": "Dealership Opportunities",
                    "consultation": "Farm Consultation",
                    "enterprise": "Enterprise Integration"
                },
                "whatsapp": "Chat on WhatsApp",
                "response": "We typically respond within 24 hours."
            },
            "home": {
                "whatWeEnable": {
                    "title": "What We Enable",
                    "intelligence": "Crop Intelligence",
                    "decisions": "Smart Irrigation Decisions",
                    "protection": "Protected Cultivation",
                    "yield": "Yield Optimization",
                    "climate": "Climate Risk Reduction"
                },
                "howItWorks": {
                    "title": "How It Works",
                    "observe": "Observe",
                    "observeDesc": "Satellite & sensor data collection",
                    "decide": "Decide",
                    "decideDesc": "AI-driven alerts & advisories",
                    "protect": "Protect",
                    "protectDesc": "Mulching, nets & crop covers"
                },
                "whoWeServe": {
                    "title": "Who We Serve",
                    "farmers": "Farmers",
                    "dealers": "Dealers & Distributors",
                    "enterprises": "Agri Enterprises",
                    "greenhouse": "Greenhouse Operators",
                    "institutional": "Institutional Buyers"
                },
                "trust": {
                    "title": "Trusted by"
                }
            },
            "useCases": {
                "title": "Use Cases & Applications",
                "applications": [
                    { "title": "Mulching-Led Water Optimization", "desc": "(Agriplast + Fasal)\nUse UV-stabilized mulching films to reduce evaporation, combined with sensor-based irrigation alerts to apply water only when crops actually need it. Ideal for vegetables and horticulture crops." },
                    { "title": "Nursery & Sapling Microclimate Control", "desc": "(Agriplast + Fasal)\nShade nets regulate light and temperature, while on-field climate sensors monitor humidity and heat stress, ensuring uniform sapling growth in nurseries and polyhouses." },
                    { "title": "Large-Acreage Satellite Crop Monitoring", "desc": "(MapMyCrop)\nMonitor crop health, growth stages, and stress across large farms using satellite imagery, enabling early detection of issues without manual field scouting." },
                    { "title": "Pest & Disease Risk Forecasting", "desc": "(Fasal + MapMyCrop)\nCombine historical weather patterns, real-time microclimate data, and crop stage insights to predict pest and disease risk before visible damage occurs." },
                    { "title": "Smart Irrigation Scheduling", "desc": "(Fasal)\nSoil moisture and weather data generate actionable irrigation alerts, helping farmers avoid over-watering, reduce pumping costs, and maintain optimal root-zone moisture." },
                    { "title": "Protected Cultivation for High-Value Crops", "desc": "(Agriplast)\nInsect nets, shade nets, and crop covers protect crops from pests, excess heat, and wind stress, improving yield consistency in flowers, vegetables, and nurseries." },
                    { "title": "Crop Health & Stress Detection", "desc": "(MapMyCrop)\nNDVI-based satellite analysis highlights stress zones caused by water deficiency, nutrient imbalance, or disease pressure, enabling targeted field intervention." },
                    { "title": "Climate-Resilient Farming Practices", "desc": "(Agriplast + Fasal)\nUse protective agri-plastics to shield crops from extreme weather, supported by real-time climate alerts that help farmers respond quickly to heatwaves or unseasonal rainfall." },
                    { "title": "Advisory-Driven Farm Decisions", "desc": "(Fasal + MapMyCrop)\nTranslate raw sensor data and satellite insights into simple advisories, helping farmers decide when to irrigate, when to spray, and when to wait." }
                ]
            },
            "enquiry": {
                "title": "Enquire about",
                "name": "Name",
                "namePlaceholder": "Your Name",
                "phone": "Phone Number (10 Digits)",
                "phonePlaceholder": "9876543210",
                "city": "City/Place",
                "cityPlaceholder": "Start typing to search...",
                "iam": "I am a:",
                "category": {
                    "farmer": "Farmer",
                    "dealer": "Dealer & Distributor",
                    "enterprise": "Agri Enterprise",
                    "greenhouse": "Greenhouse Operator",
                    "institutional": "Institutional Buyer"
                },
                "cropsDetails": "Crops & Area Details",
                "cropName": "Crop Name",
                "areaAcres": "Area (Acres)",
                "addCrop": "+ Add Another Crop",
                "interestedProducts": "Interested Products",
                "requirement": "Requirement",
                "requirementPlaceholder": "Tell us about your requirements...",
                "submit": "Send Enquiry",
                "sending": "Sending...",
                "success": "Thank you! We will contact you soon.",
                "error": "Something went wrong. Please try again later.",
                "validation": {
                    "phone": "Please enter a valid 10-digit phone number.",
                    "category": "Please select a category (e.g., Farmer, Dealer)."
                }
            },
            "partners": {
                "keyFeatures": "Key Features & Solutions",
                "productRange": "Product Range",
                "ourPartner": "Our Partner",
                "agriplast": {
                    "description": "Leading the way in protected farming technology. Agriplast provides high-quality greenhouse films, mulching sheets, and modern agricultural solutions to enhance crop yield and quality.",
                    "features": [
                        { "title": "Greenhouse Films", "desc": "UV stabilized films for optimal light transmission and crop protection." },
                        { "title": "Mulching Solutions", "desc": "Advanced mulching sheets to conserve soil moisture and prevent weeds." },
                        { "title": "Smart Farming", "desc": "Soilless cultivation and hydroponic systems." }
                    ],
                    "products": [
                        { "title": "Ginegar Greenhouse Films", "desc": "High-quality films for light transmission and climate control." },
                        { "title": "Greenhouse Accessories", "desc": "Essential components for greenhouse maintenance and operation." },
                        { "title": "Insect Net", "desc": "Protection against pests while allowing ventilation." },
                        { "title": "Shade Net Solutions", "desc": "Light regulation for optimal crop growth." },
                        { "title": "Soil Solarization Film", "desc": "Eco-friendly soil disinfection." },
                        { "title": "Weed Mat", "desc": "Ground cover to suppress weed growth." },
                        { "title": "Agriplast Crop Shield Cover", "desc": "Protective covers for open field crops." },
                        { "title": "Anti-Hail Net", "desc": "Protection against hail damage." },
                        { "title": "Mulching Sheets", "desc": "For moisture conservation and weed control." }
                    ]
                },
                "fasal": {
                    "description": "Precision agriculture powered by AI & IoT. Fasal helps farmers make data-driven decisions to increase productivity and sustainability.",
                    "features": [
                        { "title": "IoT Sensors", "desc": "Real-time monitoring of soil, temperature, and crop health." },
                        { "title": "AI Predictions", "desc": "Microclimate weather forecasting and disease prediction." },
                        { "title": "Irrigation Control", "desc": "Automated irrigation management for water efficiency." }
                    ],
                    "products": [
                        { "title": "Fasal Hub", "desc": "Irrigation Automation System - Control pumps and valves from mobile." },
                        { "title": "Fasal Jet", "desc": "Irrigation & Fertigation Automation - Precise nutrient delivery." },
                        { "title": "Main Unit 5.0", "desc": "IoT device for disease pest prediction and advisory." },
                        { "title": "Soil Moisture Unit 6.0", "desc": "Monitor soil moisture real-time for precise irrigation." }
                    ]
                },
                "mapmycrop": {
                    "description": "Satellite-based crop monitoring and analytics. Gain insights into crop health, acreage, and yield estimation from space.",
                    "features": [
                        { "title": "Satellite Imagery", "desc": "High-resolution satellite data for crop monitoring." },
                        { "title": "Yield Estimation", "desc": "Accurate yield forecasts using remote sensing." },
                        { "title": "Historical Data", "desc": "Analyze past performance to plan better future cycles." }
                    ],
                    "products": [
                        { "title": "Crop Monitoring Platform", "desc": "Comprehensive platform for satellite-based crop tracking." },
                        { "title": "Automated Crop Type Detection", "desc": "Identify crop types automatically using satellite data." },
                        { "title": "Automated Farm Boundary Detection", "desc": "Digitize farm boundaries with high precision." },
                        { "title": "Tree Monitoring Software", "desc": "Specialized monitoring for orchards and plantations." },
                        { "title": "Drone Monitoring Software", "desc": "Integration with drone imagery for detailed analysis." },
                        { "title": "Irrigation Modelling Tool", "desc": "Optimize water usage with advanced modeling." },
                        { "title": "Sustainable Ag. Monitoring", "desc": "Track and verify sustainable farming practices." }
                    ]
                }
            },
            "faq": {
                "title": "Frequently Asked Questions",
                "categories": [
                    {
                        "title": "General",
                        "items": [
                            { "q": "What types of farms do your solutions support?", "a": "Our solutions support a wide range of farms including open-field farms, horticulture farms, orchards, nurseries, greenhouses, and protected cultivation setups. They are designed to work across different crops, climates, and farm sizes." },
                            { "q": "Are these solutions suitable for small and large farms?", "a": "Yes. Small farmers can use advisory and monitoring tools to improve decision-making, while large farms benefit from scalable monitoring, analytics, and material solutions for consistent operations." },
                            { "q": "Can different technologies and products be used together?", "a": "Absolutely. Satellite insights, on-field sensing, and agri-plastic products are designed to complement each other, helping farmers observe conditions, make informed decisions, and protect crops effectively." }
                        ]
                    },
                    {
                        "title": "Crop Monitoring & Advisory",
                        "items": [
                            { "q": "How does satellite crop monitoring work?", "a": "Satellite crop monitoring uses remote sensing data to analyze vegetation health, growth stages, and stress across fields. This allows farmers to monitor large areas without physically inspecting every plot." },
                            { "q": "How often is crop health data updated?", "a": "Crop health data is updated regularly based on satellite revisit cycles, ensuring timely visibility into crop conditions throughout the growing season." },
                            { "q": "Do I need sensors to use crop monitoring services?", "a": "No. Satellite-based monitoring works independently. Sensors are optional and can be added for more localized, real-time insights such as soil moisture and microclimate conditions." },
                            { "q": "How accurate are weather and disease alerts?", "a": "Alerts are generated using a combination of real-time weather data, crop stage information, and historical patterns. While no prediction is perfect, these alerts significantly reduce guesswork and risk." }
                        ]
                    },
                    {
                        "title": "Irrigation & Water Management",
                        "items": [
                            { "q": "How do irrigation alerts help reduce water usage?", "a": "Irrigation alerts notify farmers only when crops actually need water, helping avoid over-irrigation, reduce water wastage, and lower energy costs." },
                            { "q": "Can these solutions work with existing irrigation systems?", "a": "Yes. The advisories are independent of the irrigation method and can be applied to drip, sprinkler, flood irrigation, or any existing setup." },
                            { "q": "How do I know when my crop actually needs watering?", "a": "By using soil moisture data, weather conditions, and crop growth stage, irrigation advisories indicate the right time and frequency for watering instead of relying on fixed schedules." }
                        ]
                    },
                    {
                        "title": "Protected Cultivation & Agri Plastics",
                        "items": [
                            { "q": "What is protected cultivation and when should it be used?", "a": "Protected cultivation involves using materials like mulch films, shade nets, insect nets, and crop covers to protect crops from pests, weather stress, and moisture loss. It is especially useful for high-value and sensitive crops." },
                            { "q": "How do mulching films improve crop yield?", "a": "Mulching films help retain soil moisture, control weeds, regulate soil temperature, and reduce nutrient loss, leading to healthier crop growth and improved yield consistency." },
                            { "q": "What is the difference between shade nets and insect nets?", "a": "Shade nets control sunlight intensity and temperature, while insect nets physically block pests from entering crop areas. Both serve different but complementary purposes in crop protection." },
                            { "q": "Are agri-plastic products suitable for all crops?", "a": "Most agri-plastic products are adaptable across crops, but selection depends on crop type, climate, and farming practice. Choosing the right material ensures maximum benefit." }
                        ]
                    },
                    {
                        "title": "Implementation & Usage",
                        "items": [
                            { "q": "Is technical expertise required to use these solutions?", "a": "No advanced technical knowledge is required. The systems are designed to be farmer-friendly, with insights and advisories presented in simple, actionable formats." },
                            { "q": "How quickly can a farmer start seeing benefits?", "a": "Some benefits like better irrigation decisions and reduced stress appear within weeks, while yield and cost improvements become evident over a full crop cycle." },
                            { "q": "Are these solutions location-specific or crop-specific?", "a": "They are adaptable across regions and crops, with recommendations tailored based on local climate, soil conditions, and crop type." }
                        ]
                    }
                ]
            }
        }
    },
    mr: {
        translation: {
            "nav": {
                "home": "मुख्य पृष्ठ",
                "partners": "भागीदार",
                "contact": "संपर्क साधा",
                "useCases": "उपयोग प्रकरणे"
            },
            "hero": {
                "empowering": "शेतीला सक्षम करणे",
                "solutions": "उपाययोजनांसह",
                "trustedPartner": "ऍग्रीप्लास्ट, फसल आणि मॅप माय क्रॉपसाठी तुमचा विश्वासार्ह भागीदार. आधुनिक शेतीसाठी शाश्वत उपाय वितरीत करणे.",
                "getStarted": "सुरुवात करा",
                "ourPartners": "आमचे भागीदार"
            },
            "footer": {
                "reliableStockist": "ऍग्रीप्लास्ट, फसल आणि मॅप माय क्रॉपचे विश्वसनीय वितरक. शेतकरी आणि व्यवसायांना सक्षम करण्यासाठी प्रीमियम कृषी उपाय वितरीत करणे.",
                "quickLinks": "महत्वाचे दुवे",
                "contactUs": "संपर्क साधा",
                "visitUs": "भेट द्या",
                "callUs": "कॉल करा",
                "emailUs": "ईमेल करा",
                "rights": "सर्व हक्क राखीव."
            },
            "contact": {
                "getInTouch": "संपर्कात रहा",
                "subText": "आम्हाला तुमच्याकडून ऐकायला आवडेल. ऍग्रीप्लास्ट, फसल किंवा मॅप माय क्रॉप बद्दल कोणत्याही चौकशीसाठी संपर्क साधा.",
                "infoTitle": "संपर्क माहिती",
                "businessHours": "कामाच्या वेळा",
                "monSat": "सोम - शनि: सकाळी १०:०० - सायंकाळी ६:००",
                "sunday": "रविवार: बंद",
                "whyContact": "नंबर १ ॲग्रीटेक तुम्हाला कशी मदत करू शकते:",
                "reasons": {
                    "product": "उत्पादन चौकशी",
                    "dealership": "डीलरशिप संधी",
                    "consultation": "शेती सल्ला",
                    "enterprise": "एंटरप्राइझ एकत्रीकरण"
                },
                "whatsapp": "व्हॉट्सॲपवर चॅट करा",
                "response": "आम्ही साधारणपणे २४ तासांत प्रतिसाद देतो."
            },
            "home": {
                "whatWeEnable": {
                    "title": "आम्ही काय सक्षम करतो",
                    "intelligence": "पीक बुद्धिमत्ता",
                    "decisions": "स्मार्ट सिंचन निर्णय",
                    "protection": "संरक्षित शेती",
                    "yield": "उत्पादन ऑप्टिमायझेशन",
                    "climate": "हवामान धोका कमी करणे"
                },
                "howItWorks": {
                    "title": "हे कसे कार्य करते",
                    "observe": "निरीक्षण करा",
                    "observeDesc": "उपग्रह आणि सेन्सर डेटा संकलन",
                    "decide": "निर्णय घ्या",
                    "decideDesc": "एआय-आधारित सूचना आणि सल्ला",
                    "protect": "संरक्षण करा",
                    "protectDesc": "मल्चिंग, नेट्स आणि पीक कव्हर"
                },
                "whoWeServe": {
                    "title": "आम्ही कोणासाठी काम करतो",
                    "farmers": "शेतकरी",
                    "dealers": "विक्रेता आणि वितरक",
                    "enterprises": "कृषी उद्योग",
                    "greenhouse": "ग्रीनहाऊस ऑपरेटर",
                    "institutional": "संस्थात्मक खरेदीदार"
                },
                "trust": {
                    "title": "यांच्यावर विश्वास"
                }
            },
            "useCases": {
                "title": "उपयोग आणि अनुप्रयोग",
                "applications": [
                    { "title": "मल्चिंग-आधारित पाणी व्यवस्थापन", "desc": "(Agriplast + Fasal)\nबाष्पीभवन कमी करण्यासाठी यूव्ही-स्टॅबिलाईझ्ड मल्चिंग फिल्म्सचा वापर, जोडीला सेन्सर-आधारित सिंचन अलर्ट, जेणेकरून पिकांना जेव्हा खरोखर गरज असेल तेव्हाच पाणी दिले जाईल. भाजीपाला आणि फलोत्पादन पिकांसाठी आदर्श." },
                    { "title": "नर्सरी आणि रोपांचे मायक्रोक्लाइमेट नियंत्रण", "desc": "(Agriplast + Fasal)\nशेड नेट प्रकाश आणि तापमान नियंत्रित करतात, तर शेतावरील हवामान सेन्सर्स आर्द्रता आणि उष्णतेच्या तणावाचे निरीक्षण करतात, ज्यामुळे नर्सरी आणि पॉलीहाऊसमध्ये रोपांची एकसारखी वाढ सुनिश्चित होते." },
                    { "title": "मोठ्या क्षेत्रावरील पिकांचे उपग्रह निरीक्षण", "desc": "(MapMyCrop)\nउपग्रह इमेजरी वापरून मोठ्या शेतांमध्ये पिकांचे आरोग्य, वाढीचे टप्पे आणि तणावाचे निरीक्षण करा, ज्यामुळे प्रत्यक्ष शेतात न जाता समस्यांचे लवकर निदान करणे शक्य होते." },
                    { "title": "कीटक आणि रोग जोखीम अंदाज", "desc": "(Fasal + MapMyCrop)\nऐतिहासिक हवामान नमुने, रिअल-टाइम मायक्रोक्लाइमेट डेटा आणि पिकांच्या टप्प्याची माहिती एकत्रित करून, नुकसान दृश्यमान होण्यापूर्वी कीटक आणि रोगाच्या जोखमीचा अंदाज लावा." },
                    { "title": "स्मार्ट सिंचन वेळापत्रक", "desc": "(Fasal)\nमातीची आर्द्रता आणि हवामान डेटावर आधारित सिंचन अलर्ट मिळवा, ज्यामुळे शेतकऱ्यांना अति-पाणी देणे टाळण्यास, पंपिंग खर्च कमी करण्यास आणि मुळांच्या क्षेत्रातील इष्टतम ओलावा राखण्यास मदत होते." },
                    { "title": "उच्च-मूल्य पिकांसाठी संरक्षित शेती", "desc": "(Agriplast)\nकीटक नेट, शेड नेट आणि पीक कव्हर्स पिकांचे कीटक, अति उष्णता आणि वारा यांपासून संरक्षण करतात, ज्यामुळे फुले, भाजीपाला आणि नर्सरीमध्ये उत्पादनाची सातत्य सुधारते." },
                    { "title": "पीक आरोग्य आणि तणाव डिटेक्शन", "desc": "(MapMyCrop)\nNDVI-आधारित उपग्रह विश्लेषण पाण्याच्या कमतरतेमुळे, पोषक घटकांच्या असंतुलनामुळे किंवा रोगाच्या दबावामुळे तणावग्रस्त क्षेत्र हायलाइट करते, ज्यामुळे लक्ष्यित उपाययोजना करणे शक्य होते." },
                    { "title": "हवामान-अनुकूल शेती पद्धती", "desc": "(Agriplast + Fasal)\nअतिवृष्टी किंवा उष्णतेच्या लाटेपासून पिकांचे संरक्षण करण्यासाठी संरक्षणात्मक ॲग्री-प्लास्टिकचा वापर करा, ज्याला रिअल-टाइम हवामान अलर्टचा आधार आहे, ज्यामुळे शेतकऱ्यांना त्वरित प्रतिक्रिया देण्यास मदत होते." },
                    { "title": "सल्ला-आधारित शेती निर्णय", "desc": "(Fasal + MapMyCrop)\nकच्च्या सेन्सर डेटा आणि उपग्रह अंतर्दृष्टीचे सोप्या सल्ल्यामध्ये रूपांतर करा, ज्यामुळे शेतकऱ्यांना कधी पाणी द्यावे, कधी फवारणी करावी आणि कधी प्रतीक्षा करावी हे ठरवण्यात मदत होईल." }
                ]
            },
            "enquiry": {
                "title": "चौकशी करा",
                "name": "नाव",
                "namePlaceholder": "तुमचे नाव",
                "phone": "फोन नंबर (१० अंक)",
                "phonePlaceholder": "९८७६५४३२१०",
                "city": "शहर/ठिकाण",
                "cityPlaceholder": "शोधण्यासाठी टाईप करायला सुरुवात करा...",
                "iam": "मी एक आहे:",
                "category": {
                    "farmer": "शेतकरी",
                    "dealer": "विक्रेता आणि वितरक",
                    "enterprise": "कृषी उद्योग",
                    "greenhouse": "ग्रीनहाऊस ऑपरेटर",
                    "institutional": "संस्थात्मक खरेदीदार"
                },
                "cropsDetails": "पिके आणि क्षेत्र तपशील",
                "cropName": "पिकाचे नाव",
                "areaAcres": "क्षेत्र (एकर)",
                "addCrop": "+ दुसरे पीक जोडा",
                "interestedProducts": "इच्छुक उत्पादने",
                "requirement": "आवश्यकता",
                "requirementPlaceholder": "तुमच्या आवश्यकता बद्दल सांगा...",
                "submit": "चौकशी पाठवा",
                "sending": "पाठवत आहे...",
                "success": "धन्यवाद! आम्ही लवकरच तुमच्याशी संपर्क साधू.",
                "error": "काहीतरी चूक झाली. कृपया नंतर पुन्हा प्रयत्न करा.",
                "validation": {
                    "phone": "कृपया वैध १० अंकी फोन नंबर प्रविष्ट करा.",
                    "category": "कृपया श्रेणी निवडा (उदा. शेतकरी, विक्रेता)."
                }
            },
            "partners": {
                "keyFeatures": "प्रमुख वैशिष्ट्ये आणि उपाय",
                "productRange": "उत्पादन श्रेणी",
                "ourPartner": "आमचे भागीदार",
                "agriplast": {
                    "description": "संरक्षित शेती तंत्रज्ञानामध्ये आघाडीवर. ऍग्रीप्लास्ट उच्च-गुणवत्तेचे ग्रीनहाऊस फिल्म्स, मल्चिंग शीट्स आणि पीक उत्पादन आणि गुणवत्ता वाढवण्यासाठी आधुनिक कृषी उपाय प्रदान करते.",
                    "features": [
                        { "title": "ग्रीनहाऊस फिल्म्स", "desc": "इष्टतम प्रकाश प्रसारण आणि पीक संरक्षणासाठी यूव्ही-स्टॅबिलाईझ्ड फिल्म्स." },
                        { "title": "मल्चिंग सोल्यूशन्स", "desc": "मातीची ओलावा टिकवण्यासाठी आणि तण रोखण्यासाठी प्रगत मल्चिंग शीट्स." },
                        { "title": "स्मार्ट फार्मिंग", "desc": "मातीविरहित शेती आणि हायड्रोपोनिक प्रणाली." }
                    ],
                    "products": [
                        { "title": "जिनेगर ग्रीनहाऊस फिल्म्स", "desc": "प्रकाश प्रसारण आणि हवामान नियंत्रणासाठी उच्च-गुणवत्तेचे फिल्म्स." },
                        { "title": "ग्रीनहाऊस ऍक्सेसरीज", "desc": "ग्रीनहाऊस देखभाल आणि ऑपरेशनसाठी आवश्यक घटक." },
                        { "title": "इन्सेक्ट नेट", "desc": "वायुवीजन होऊ देताना कीटकांचा प्रादुर्भाव टाळण्यासाटी संरक्षण." },
                        { "title": "शेड नेट सोल्यूशन्स", "desc": "इष्टतम पीक वाढीसाठी प्रकाश नियमन." },
                        { "title": "सोल सोलरायझेशन फिल्म", "desc": "पर्यावरणपूरक माती निर्जंतुकीकरण." },
                        { "title": "वीड मॅट", "desc": "तण वाढ रोखण्यासाठी ग्राउंड कव्हर." },
                        { "title": "ऍग्रीप्लास्ट पीक शील्ड कव्हर", "desc": "मोकळ्या शेतातील पिकांसाठी संरक्षणात्मक आच्छादने." },
                        { "title": "अँटी-हेल नेट", "desc": "गारपिटीपासून पिकांचे संरक्षण." },
                        { "title": "मल्चिंग शीट्स", "desc": "ओलावा संवर्धन आणि तण नियंत्रणासाठी." }
                    ]
                },
                "fasal": {
                    "description": "एआय आणि आयओटी द्वारे समर्थित अचूक शेती. फसल शेतकऱ्यांना उत्पादकता आणि शाश्वतता वाढवण्यासाठी डेटा-आधारित निर्णय घेण्यास मदत करते.",
                    "features": [
                        { "title": "आयओटी सेन्सर्स", "desc": "माती, तापमान आणि पिकाच्या आरोग्याचे रिअल-टाइम निरीक्षण." },
                        { "title": "एआय अंदाज", "desc": "मायक्रोक्लायमेट हवामान अंदाज आणि रोग अंदाज." },
                        { "title": "सिंचन नियंत्रण", "desc": "पाण्याच्या कार्यक्षमतेसाठी स्वयंचलित सिंचन व्यवस्थापन." }
                    ],
                    "products": [
                        { "title": "फसल हब", "desc": "सिंचन ऑटोमेशन सिस्टम - मोबाईलवरून पंप आणि व्हॉल्व्ह नियंत्रित करा." },
                        { "title": "फसल जेट", "desc": "सिंचन आणि फर्टिगेशन ऑटोमेशन - अचूक पोषक वितरण." },
                        { "title": "मेन युनिट ५.०", "desc": "रोग आणि कीटक अंदाज आणि सल्ल्यासाठी आयओटी डिव्हाइस." },
                        { "title": "मृदा ओलावा युनिट ६.०", "desc": "अचूक सिंचनासाठी रिअल-टाइम माती ओलावा निरीक्षण." }
                    ]
                },
                "mapmycrop": {
                    "description": "उपग्रह-आधारित पीक निरीक्षण आणि विश्लेषण. अंतराळातून पिकाचे आरोग्य, क्षेत्रफळ आणि उत्पादनाचा अंदाज मिळवा.",
                    "features": [
                        { "title": "सॅटेलाईट इमेजरी", "desc": "पीक निरीक्षणासाठी उच्च-रिझोल्यूशन उपग्रह डेटा." },
                        { "title": "उत्पादन अंदाज", "desc": "रिमोट सेन्सिंग वापरून अचूक उत्पादन अंदाज." },
                        { "title": "ऐतिहासिक डेटा", "desc": "भविष्यातील चांगल्या नियोजनासाठी मागील कामगिरीचे विश्लेषण करा." }
                    ],
                    "products": [
                        { "title": "पीक निरीक्षण प्लॅटफॉर्म", "desc": "उपग्रह-आधारित पीक ट्रॅकिंगसाठी सर्वसमावेशक प्लॅटफॉर्म." },
                        { "title": "स्वयंचलित पीक प्रकार ओळख", "desc": "उपग्रह डेटा वापरून पीक प्रकार स्वयंचलितपणे ओळखा." },
                        { "title": "स्वयंचलित शेत सीमा ओळख", "desc": "अचूकतेने शेताच्या सीमा डिजिटाइज करा." },
                        { "title": "झाड निरीक्षण सॉफ्टवेअर", "desc": "बागा आणि लागवडीसाठी विशेष निरीक्षण." },
                        { "title": "ड्रोन निरीक्षण सॉफ्टवेअर", "desc": "तपशीलवार विश्लेषणासाठी ड्रोन इमेजरीसह एकत्रीकरण." },
                        { "title": "सिंचन मॉडेलिंग टूल", "desc": "प्रगत मॉडेलिंगसह पाण्याचा वापर इष्टतम करा." },
                        { "title": "शाश्वत कृषी निरीक्षण", "desc": "शाश्वत शेती पद्धतींचा मागोवा घ्या आणि पडताळणी करा." }
                    ]
                }
            },
            "faq": {
                "title": "वारंवार विचारले जाणारे प्रश्न (FAQ)",
                "categories": [
                    {
                        "title": "सामान्य",
                        "items": [
                            { "q": "तुमचे उपाय कोणत्या प्रकारच्या शेतीसाठी उपयुक्त आहेत?", "a": "आमचे उपाय ओपन-फील्ड शेती, फलोत्पादन, फळबागा, नर्सरी, ग्रीनहाऊस आणि संरक्षित शेती सेटअपसह विस्तृत श्रेणीतील शेतीसाठी उपयुक्त आहेत. ते विविध पिके, हवामान आणि शेताच्या आकारांनुसार काम करण्यासाठी डिझाइन केलेले आहेत." },
                            { "q": "हे उपाय लहान आणि मोठ्या शेतांसाठी योग्य आहेत का?", "a": "होय. लहान शेतकरी निर्णय प्रक्रिया सुधारण्यासाठी सल्लागार आणि देखरेख साधनांचा वापर करू शकतात, तर मोठ्या शेतांना सातत्यपूर्ण ऑपरेशन्ससाठी स्केलेबल मॉनिटरिंग, विश्लेषणे आणि मटेरियल सोल्यूशन्सचा फायदा होतो." },
                            { "q": "विविध तंत्रज्ञान आणि उत्पादने एकत्र वापरली जाऊ शकतात का?", "a": "नक्कीच. सॅटेलाइट इनसाइट्स, ऑन-फील्ड सेन्सिंग आणि ॲग्री-प्लास्टिक उत्पादने एकमेकांना पूरक म्हणून डिझाइन केलेली आहेत, ज्यामुळे शेतकऱ्यांना परिस्थितीचे निरीक्षण करणे, माहितीपूर्ण निर्णय घेणे आणि पिकांचे प्रभावीपणे संरक्षण करणे शक्य होते." }
                        ]
                    },
                    {
                        "title": "पीक निरीक्षण आणि सल्ला",
                        "items": [
                            { "q": "सॅटेलाइट पीक निरीक्षण कसे काम करते?", "a": "सॅटेलाइट पीक निरीक्षण रिमोट सेन्सिंग डेटाचा वापर करून संपूर्ण शेतातील वनस्पतींचे आरोग्य, वाढीचे टप्पे आणि तणावाचे विश्लेषण करते. यामुळे शेतकऱ्यांना प्रत्येक प्लॉटची प्रत्यक्ष पाहणी न करता मोठ्या क्षेत्राचे निरीक्षण करणे शक्य होते." },
                            { "q": "पीक आरोग्याचा डेटा किती वेळा अपडेट केला जातो?", "a": "सॅटेलाइट रिव्हिजिट सायकल्सवर आधारित पीक आरोग्य डेटा नियमितपणे अपडेट केला जातो, ज्यामुळे हंगामात पिकांच्या स्थितीवर वेळेवर लक्ष ठेवता येते." },
                            { "q": "पीक निरीक्षण सेवा वापरण्यासाठी मला सेन्सर्सची गरज आहे का?", "a": "नाही. सॅटेलाइट-आधारित निरीक्षण स्वतंत्रपणे काम करते. सेन्सर्स ऐच्छिक आहेत आणि मातीची ओलावा आणि मायक्रोक्लाइमेट स्थितीसारख्या अधिक स्थानिकीकृत, रिअल-टाइम माहितीसाठी जोडले जाऊ शकतात." },
                            { "q": "हवामान आणि रोग अलर्ट किती अचूक असतात?", "a": "रिअल-टाइम हवामान डेटा, पीक अवस्था आणि ऐतिहासिक नमुन्यांच्या संयोजनाचा वापर करून अलर्ट तयार केले जातात. कोणताही अंदाज १००% अचूक नसला तरी, हे अलर्ट अंदाज आणि जोखीम लक्षणीयरीत्या कमी करतात." }
                        ]
                    },
                    {
                        "title": "सिंचन आणि पाणी व्यवस्थापन",
                        "items": [
                            { "q": "सिंचन अलर्ट पाण्याचा वापर कमी करण्यास कशी मदत करतात?", "a": "जेव्हा पिकांना खरोखर पाण्याची गरज असते तेव्हाच सिंचन अलर्ट शेतकऱ्यांना सूचित करतात, ज्यामुळे अति-सिंचन टाळणे, पाण्याची नासाडी कमी करणे आणि उर्जा खर्च कमी करणे शक्य होते." },
                            { "q": "हे उपाय विद्यमान सिंचन प्रणालींसह काम करू शकतात का?", "a": "होय. हे सल्ले सिंचन पद्धतीपासून स्वतंत्र आहेत आणि ठिबक, स्प्रिंकलर, फ्लड इरिगेशन किंवा कोणत्याही विद्यमान सेटअपवर लागू केले जाऊ शकतात." },
                            { "q": "माझ्या पिकाला पाण्याची गरज कधी आहे हे मला कसे कळेल?", "a": "मातीची ओलावा डेटा, हवामान स्थिती आणि पीक वाढीचा टप्पा वापरून, सिंचन सल्ले निश्चित वेळापत्रकावर अवलंबून न राहता पाणी देण्यासाठी योग्य वेळ आणि वारंवारता दर्शवतात." }
                        ]
                    },
                    {
                        "title": "संरक्षित शेती आणि ॲग्री प्लास्टिक",
                        "items": [
                            { "q": "संरक्षित शेती म्हणजे काय आणि ती कधी वापरावी?", "a": "संरक्षित शेतीमध्ये पिकांचे कीटक, हवामानाचा ताण आणि ओलावा कमी होण्यापासून संरक्षण करण्यासाठी मल्च फिल्म्स, शेड नेट्स, इन्सेक्ट नेट्स आणि क्रॉप कव्हर्स यांसारख्या साहित्याचा वापर केला जातो. हे उच्च-मूल्य आणि संवेदनशील पिकांसाठी विशेषतः उपयुक्त आहे." },
                            { "q": "मल्चिंग फिल्म्स पीक उत्पादन कसे सुधारतात?", "a": "मल्चिंग फिल्म्स मातीची ओलावा टिकवून ठेवण्यास, तण नियंत्रण करण्यास, मातीचे तापमान नियंत्रित करण्यास आणि पोषक तत्वांचा ऱ्हास कमी करण्यास मदत करतात, ज्यामुळे पिकांची वाढ निरोगी होते आणि उत्पादन सातत्य सुधारते." },
                            { "q": "शेड नेट्स आणि इन्सेक्ट नेट्स मध्ये काय फरक आहे?", "a": "शेड नेट्स सूर्यप्रकाशाची तीव्रता आणि तापमान नियंत्रित करतात, तर इन्सेक्ट नेट्स कीटकांना पीक क्षेत्रात प्रवेश करण्यापासून भौतिकरित्या रोखतात. दोन्ही पीक संरक्षणात भिन्न परंतु पूरक उद्देश पूर्ण करतात." },
                            { "q": "ॲग्री-प्लास्टिक उत्पादने सर्व पिकांसाठी योग्य आहेत का?", "a": "बहुतांश ॲग्री-प्लास्टिक उत्पादने पिकांनुसार अनुकूल करता येतात, परंतु निवड पीक प्रकार, हवामान आणि शेती पद्धतीवर अवलंबून असते. योग्य सामग्री निवडल्यास जास्तीत जास्त फायदा मिळतो." }
                        ]
                    },
                    {
                        "title": "अंमलबजावणी आणि वापर",
                        "items": [
                            { "q": "हे उपाय वापरण्यासाठी तांत्रिक ज्ञानाची आवश्यकता आहे का?", "a": "कोणत्याही प्रगत तांत्रिक ज्ञानाची आवश्यकता नाही. ही प्रणाली शेतकरी-अनुकूल असण्यासाठी डिझाइन केली गेली आहे, ज्यामध्ये अंतर्दृष्टी आणि सल्ले सोप्या, कृती करण्यायोग्य स्वरूपात सादर केले जातात." },
                            { "q": "शेतकऱ्याला फायदे किती लवकर दिसू लागतात?", "a": "चांगले सिंचन निर्णय आणि कमी तणाव यासारखे काही फायदे काही आठवड्यांत दिसून येतात, तर उत्पादन आणि खर्चातील सुधारणा पूर्ण पीक चक्रात स्पष्ट होतात." },
                            { "q": "हे उपाय स्थान-विशिष्ट किंवा पीक-विशिष्ट आहेत का?", "a": "हे प्रदेश आणि पिकांनुसार अनुकूल आहेत, ज्यामध्ये स्थानिक हवामान, मातीची स्थिती आणि पीक प्रकारावर आधारित शिफारसी तयार केल्या जातात." }
                        ]
                    }
                ]
            }
        }
    },
    hi: {
        translation: {
            "nav": {
                "home": "होम",
                "partners": "भागीदार",
                "contact": "संपर्क करें",
                "useCases": "उपयोग के मामले"
            },
            "hero": {
                "empowering": "कृषि को सशक्त बनाना",
                "solutions": "समाधानों के साथ",
                "trustedPartner": "एग्रीप्लास्ट, फसल और मैप माई क्रॉप के लिए आपका विश्वसनीय भागीदार। आधुनिक खेती के लिए स्थायी समाधान प्रदान करना।",
                "getStarted": "शुरू करें",
                "ourPartners": "हमारे भागीदार"
            },
            "footer": {
                "reliableStockist": "एग्रीप्लास्ट, फसल और मैप माई क्रॉप के विश्वसनीय स्टॉकिस्ट। किसानों और व्यवसायों को सशक्त बनाने के लिए प्रीमियम कृषि समाधान प्रदान करना।",
                "quickLinks": "त्वरित लिंक",
                "contactUs": "संपर्क करें",
                "visitUs": "हमसे मिलें",
                "callUs": "कॉल करें",
                "emailUs": "ईमेल करें",
                "rights": "सर्वाधिकार सुरक्षित।"
            },
            "contact": {
                "getInTouch": "संपर्क में रहें",
                "subText": "हमें आपसे सुनना अच्छा लगेगा। एग्रीप्लास्ट, फसल या मैप माई क्रॉप के बारे में किसी भी पूछताछ के लिए संपर्क करें।",
                "infoTitle": "संपर्क जानकारी",
                "businessHours": "कार्य समय",
                "monSat": "सोम - शनि: सुबह 10:00 - शाम 6:00",
                "sunday": "रविवार: बंद",
                "whyContact": "नंबर १ एग्रीटेक आपकी कैसे मदद कर सकता है:",
                "reasons": {
                    "product": "उत्पाद पूछताछ",
                    "dealership": "डीलरशिप के अवसर",
                    "consultation": "कृषि परामर्श",
                    "enterprise": "उद्यम एकीकरण"
                },
                "whatsapp": "व्हाट्सएप पर चैट करें",
                "response": "हम आमतौर पर 24 घंटे के भीतर जवाब देते हैं।"
            },
            "home": {
                "whatWeEnable": {
                    "title": "हम क्या सक्षम करते हैं",
                    "intelligence": "फसल खुफिया",
                    "decisions": "स्मार्ट सिंचाई निर्णय",
                    "protection": "संरक्षित खेती",
                    "yield": "उपज अनुकूलन",
                    "climate": "जलवायु जोखिम में कमी"
                },
                "howItWorks": {
                    "title": "यह कैसे काम करता है",
                    "observe": "निरीक्षण",
                    "observeDesc": "उपग्रह और सेंसर डेटा संग्रह",
                    "decide": "निर्णय लें",
                    "decideDesc": "एआई-संचालित अलर्ट और सलाह",
                    "protect": "रक्षा करें",
                    "protectDesc": "मल्चिंग, जाल और फसल कवर"
                },
                "whoWeServe": {
                    "title": "हम किसकी सेवा करते हैं",
                    "farmers": "किसान",
                    "dealers": "डीलर और वितरक",
                    "enterprises": "कृषि उद्यम",
                    "greenhouse": "ग्रीनहाउस ऑपरेटर",
                    "institutional": "संस्थागत खरीदार"
                },
                "trust": {
                    "title": "इनका भरोसा"
                }
            },
            "useCases": {
                "title": "उपयोग के मामले और अनुप्रयोग",
                "applications": [
                    { "title": "मल्चिंग-आधारित जल अनुकूलन", "desc": "(Agriplast + Fasal)\nवाष्पीकरण को कम करने के लिए यूवी-स्थिर मल्चिंग फिल्मों का उपयोग करें, साथ ही सेंसर-आधारित सिंचाई अलर्ट ताकि पानी केवल तभी दिया जाए जब फसलों को वास्तव में इसकी आवश्यकता हो। सब्जियों और बागवानी फसलों के लिए आदर्श।" },
                    { "title": "नर्सरी और पौधों का माइक्रोक्लाइमेट नियंत्रण", "desc": "(Agriplast + Fasal)\nशेड नेट प्रकाश और तापमान को नियंत्रित करते हैं, जबकि खेत पर जलवायु सेंसर नमी और गर्मी के तनाव की निगरानी करते हैं, जिससे नर्सरी और पॉलीहाउस में एक समान पौधों की वृद्धि सुनिश्चित होती है।" },
                    { "title": "बड़े रकबे वाली फसल की उपग्रह निगरानी", "desc": "(MapMyCrop)\nउपग्रह इमेजरी का उपयोग करके बड़े खेतों में फसल के स्वास्थ्य, विकास के चरणों और तनाव की निगरानी करें, जिससे मैन्युअल फील्ड स्काउटिंग के बिना मुद्दों का जल्द पता लगाया जा सके।" },
                    { "title": "कीट और रोग जोखिम पूर्वानुमान", "desc": "(Fasal + MapMyCrop)\nऐतिहासिक मौसम पैटर्न, वास्तविक समय के माइक्रोक्लाइमेट डेटा और फसल चरण की जानकारी को मिलाकर कीट और रोग के जोखिम का पूर्वानुमान लगाएं, इससे पहले कि कोई दृश्य क्षति हो।" },
                    { "title": "स्मार्ट सिंचाई शेड्यूलिंग", "desc": "(Fasal)\nमिट्टी की नमी और मौसम का डेटा कार्रवाई योग्य सिंचाई अलर्ट उत्पन्न करता है, जिससे किसानों को अधिक पानी देने से बचने, पम्पिंग लागत कम करने और इष्टतम रूट-ज़ोन नमी बनाए रखने में मदद मिलती है।" },
                    { "title": "उच्च मूल्य वाली फसलों के लिए संरक्षित खेती", "desc": "(Agriplast)\nकीट नेट, शेड नेट और फसल कवर फसलों को कीटों, अतिरिक्त गर्मी और हवा के तनाव से बचाते हैं, जिससे फूलों, सब्जियों और नर्सरी में उपज की स्थिरता में सुधार होता है।" },
                    { "title": "फसल स्वास्थ्य और तनाव का पता लगाना", "desc": "(MapMyCrop)\nNDVI-आधारित उपग्रह विश्लेषण पानी की कमी, पोषक तत्वों के असंतुलन या बीमारी के दबाव के कारण तनाव वाले क्षेत्रों को उजागर करता है, जिससे लक्षित क्षेत्र हस्तक्षेप सक्षम होता है।" },
                    { "title": " जलवायु-लचीली खेती के तरीके", "desc": "(Agriplast + Fasal)\nफसलों को चरम मौसम से बचाने के लिए सुरक्षात्मक एग्री-प्लास्टिक का उपयोग करें, जो वास्तविक समय के जलवायु अलर्ट द्वारा समर्थित है जो किसानों को गर्मी की लहरों या बेमौसम बारिश पर जल्दी प्रतिक्रिया करने में मदद करता है।" },
                    { "title": "सलाहकार-संचालित कृषि निर्णय", "desc": "(Fasal + MapMyCrop)\nकच्चे सेंसर डेटा और उपग्रह अंतर्दृष्टि को सरल सलाह में बदलें, जिससे किसानों को यह तय करने में मदद मिले कि कब सिंचाई करनी है, कब छिड़काव करना है और कब प्रतीक्षा करनी है।" }
                ]
            },
            "enquiry": {
                "title": "पूछताछ करें",
                "name": "नाम",
                "namePlaceholder": "आपका नाम",
                "phone": "फ़ोन नंबर (१० अंक)",
                "phonePlaceholder": "९८७६५४३२१०",
                "city": "शहर/जगह",
                "cityPlaceholder": "खोजने के लिए टाइप करना शुरू करें...",
                "iam": "मैं एक हूँ:",
                "category": {
                    "farmer": "किसान",
                    "dealer": "डीलर और वितरक",
                    "enterprise": "कृषि उद्यम",
                    "greenhouse": "ग्रीनहाउस ऑपरेटर",
                    "institutional": "संस्थागत खरीदार"
                },
                "cropsDetails": "फसल और क्षेत्र विवरण",
                "cropName": "फसल का नाम",
                "areaAcres": "क्षेत्र (एकड़)",
                "addCrop": "+ एक और फसल जोड़ें",
                "interestedProducts": "इच्छुक उत्पाद",
                "requirement": "आवश्यकता",
                "requirementPlaceholder": "हमें अपनी आवश्यकताओं के बारे में बताएं...",
                "submit": "पूछताछ भेजें",
                "sending": "भेज रहा है...",
                "success": "धन्यवाद! हम आपसे जल्द ही संपर्क करेंगे।",
                "error": "कुछ गलत हो गया। कृपया बाद में फिर से प्रयास करें।",
                "validation": {
                    "phone": "कृपया वैध 10 अंकों का फ़ोन नंबर दर्ज करें।",
                    "category": "कृपया एक श्रेणी चुनें (जैसे, किसान, डीलर)।"
                }
            },
            "partners": {
                "keyFeatures": "प्रमुख विशेषताएं और समाधान",
                "productRange": "उत्पाद श्रेणी",
                "ourPartner": "हमारे भागीदार",
                "agriplast": {
                    "description": "संरक्षित खेती तकनीक में अग्रणी। एग्रीप्लास्ट फसल की उपज और गुणवत्ता बढ़ाने के लिए उच्च गुणवत्ता वाले ग्रीनहाउस फिल्म्स, मल्चिंग शीट्स और आधुनिक कृषि समाधान प्रदान करता है।",
                    "features": [
                        { "title": "ग्रीनहाउस फिल्म्स", "desc": "इष्टतम प्रकाश संचरण और फसल सुरक्षा के लिए यूवी-स्थिर फिल्म्स।" },
                        { "title": "मल्चिंग समाधान", "desc": "मिट्टी की नमी बनाए रखने और खरपतवार को रोकने के लिए उन्नत मल्चिंग शीट्स।" },
                        { "title": "स्मार्ट खेती", "desc": "मृदारहित खेती और हाइड्रोपोनिक प्रणाली।" }
                    ],
                    "products": [
                        { "title": "गिनेगर ग्रीनहाउस फिल्म्स", "desc": "प्रकाश संचरण और जलवायु नियंत्रण के लिए उच्च गुणवत्ता वाली फिल्में।" },
                        { "title": "ग्रीनहाउस एक्सेसरीज", "desc": "ग्रीनहाउस रखरखाव और संचालन के लिए आवश्यक घटक।" },
                        { "title": "कीट नेट (Insect Net)", "desc": "वेंटिलेशन की अनुमति देते हुए कीटों से सुरक्षा।" },
                        { "title": "छाया नेट समाधान", "desc": "इष्टतम फसल वृद्धि के लिए प्रकाश विनियमन।" },
                        { "title": "मृदा सौरीकरण फिल्म", "desc": "पर्यावरण के अनुकूल मिट्टी कीटाणुशोधन।" },
                        { "title": "वीड मैट", "desc": "खरपतवार वृद्धि को रोकने के लिए ग्राउंड कवर।" },
                        { "title": "एग्रीप्लास्ट क्रॉप शील्ड कवर", "desc": "खुले मैदान की फसलों के लिए सुरक्षात्मक कवर।" },
                        { "title": "ओला-रोधी नेट (Anti-Hail)", "desc": "ओलावृष्टि से सुरक्षा।" },
                        { "title": "मल्चिंग शीट्स", "desc": "नमी संरक्षण और खरपतवार नियंत्रण के लिए।" }
                    ]
                },
                "fasal": {
                    "description": "एआई और आईओटी द्वारा संचालित सटीक कृषि। फसल किसानों को उत्पादकता और स्थिरता बढ़ाने के लिए डेटा-संचालित निर्णय लेने में मदद करता है।",
                    "features": [
                        { "title": "आईओटी सेंसर", "desc": "मिट्टी, तापमान और फसल स्वास्थ्य की वास्तविक समय की निगरानी।" },
                        { "title": "एआई भविष्यवाणियां", "desc": "माइक्रोकलाइमेट मौसम पूर्वानुमान और बीमारी की भविष्यवाणी।" },
                        { "title": "सिंचाई नियंत्रण", "desc": "जल दक्षता के लिए स्वचालित सिंचाई प्रबंधन।" }
                    ],
                    "products": [
                        { "title": "फसल हब", "desc": "सिंचाई स्वचालन प्रणाली - मोबाइल से पंप और वाल्व को नियंत्रित करें।" },
                        { "title": "फसल जेट", "desc": "सिंचाई और फर्टिगेशन स्वचालन - सटीक पोषक तत्व वितरण।" },
                        { "title": "मुख्य इकाई 5.0", "desc": "रोग और कीट भविष्यवाणी और सलाह के लिए आईओटी उपकरण।" },
                        { "title": "मृदा नमी इकाई 6.0", "desc": "सटीक सिंचाई के लिए वास्तविक समय में मिट्टी की नमी की निगरानी करें।" }
                    ]
                },
                "mapmycrop": {
                    "description": "उपग्रह-आधारित फसल निगरानी और विश्लेषण। अंतरिक्ष से फसल स्वास्थ्य, रकबा और उपज अनुमान में अंतर्दृष्टि प्राप्त करें।",
                    "features": [
                        { "title": "सैटेलाइट इमेजरी", "desc": "फसल निगरानी के लिए उच्च-रिज़ॉल्यूशन उपग्रह डेटा।" },
                        { "title": "उपज अनुमान", "desc": "रिमोट सेंसिंग का उपयोग करके सटीक उपज पूर्वानुमान।" },
                        { "title": "ऐतिहासिक डेटा", "desc": "भविष्यातील चांगल्या नियोजनासाठी मागील कामगिरीचे विश्लेषण करा." }
                    ],
                    "products": [
                        { "title": "फसल निगरानी मंच", "desc": "उपग्रह-आधारित फसल ट्रैकिंग के लिए व्यापक मंच।" },
                        { "title": "स्वचालित फसल प्रकार जांच", "desc": "उपग्रह डेटा का उपयोग करके स्वचालित रूप से फसल के प्रकारों की पहचान करें।" },
                        { "title": "स्वचालित खेत सीमा जांच", "desc": "उच्च सटीकता के साथ खेत की सीमाओं को डिजिटाइज़ करें।" },
                        { "title": "वृक्ष निगरानी सॉफ्टवेयर", "desc": "बागों और वृक्षारोपण के लिए विशेष निगरानी।" },
                        { "title": "ड्रोन निगरानी सॉफ्टवेयर", "desc": "विस्तृत विश्लेषण के लिए ड्रोन इमेजरी के साथ एकीकरण।" },
                        { "title": "सिंचाई मॉडलिंग उपकरण", "desc": "उन्नत मॉडलिंग के साथ पानी के उपयोग को अनुकूलित करें।" },
                        { "title": "टिकाऊ कृषि निगरानी", "desc": "टिकाऊ खेती प्रथाओं को ट्रैक और सत्यापित करें।" }
                    ]
                }
            },
            "faq": {
                "title": "अक्सर पूछे जाने वाले प्रश्न (FAQ)",
                "categories": [
                    {
                        "title": "सामान्य",
                        "items": [
                            { "q": "आपके समाधान किस प्रकार के खेतों का समर्थन करते हैं?", "a": "हमारे समाधान खुले खेतों, बागवानी खेतों, बगीचों, नर्सरी, ग्रीनहाउस और संरक्षित खेती सेटअप सहित विस्तृत श्रृंखला के खेतों का समर्थन करते हैं। उन्हें विभिन्न फसलों, जलवायु और खेत के आकारों में काम करने के लिए डिज़ाइन किया गया है।" },
                            { "q": "क्या ये समाधान छोटे और बड़े खेतों के लिए उपयुक्त हैं?", "a": "हाँ। छोटे किसान निर्णय लेने में सुधार के लिए सलाहकार और निगरानी उपकरणों का उपयोग कर सकते हैं, जबकि बड़े खेतों को लगातार संचालन के लिए स्केलेबल निगरानी, विश्लेषण और सामग्री समाधानों से लाभ होता है।" },
                            { "q": "क्या विभिन्न तकनीकों और उत्पादों का एक साथ उपयोग किया जा सकता है?", "a": "बिल्कुल। सैटेलाइट इनसाइट्स, ऑन-फील्ड सेंसिंग और एग्री-प्लास्टिक उत्पादों को एक-दूसरे के पूरक के लिए डिज़ाइन किया गया है, जिससे किसानों को स्थितियों का निरीक्षण करने, सूचित निर्णय लेने और फसलों की प्रभावी ढंग से रक्षा करने में मदद मिलती है।" }
                        ]
                    },
                    {
                        "title": "फसल निगरानी और सलाह",
                        "items": [
                            { "q": "सैटेलाइट फसल निगरानी कैसे काम करती है?", "a": "सैटेलाइट फसल निगरानी खेतों में वनस्पति स्वास्थ्य, विकास के चरणों और तनाव का विश्लेषण करने के लिए रिमोट सेंसिंग डेटा का उपयोग करती है। इससे किसानों को हर प्लॉट का भौतिक निरीक्षण किए बिना बड़े क्षेत्रों की निगरानी करने की अनुमति मिलती है।" },
                            { "q": "फसल स्वास्थ्य डेटा कितनी बार अपडेट किया जाता है?", "a": "सैटेलाइट रिविजिट चक्रों के आधार पर फसल स्वास्थ्य डेटा नियमित रूप से अपडेट किया जाता है, जिससे बढ़ते मौसम के दौरान फसल की स्थिति में समय पर दृश्यता सुनिश्चित होती है।" },
                            { "q": "क्या मुझे फसल निगरानी सेवाओं का उपयोग करने के लिए सेंसर की आवश्यकता है?", "a": "नहीं। सैटेलाइट-आधारित निगरानी स्वतंत्र रूप से काम करती है। सेंसर वैकल्पिक हैं और इसे मिट्टी की नमी और माइक्रोकलाइमेट स्थितियों जैसी अधिक स्थानीयकृत, वास्तविक समय की अंतर्दृष्टि के लिए जोड़ा जा सकता है।" },
                            { "q": "मौसम और रोग अलर्ट कितने सटीक होते हैं?", "a": "अलर्ट वास्तविक समय के मौसम डेटा, फसल चरण की जानकारी और ऐतिहासिक पैटर्न के संयोजन का उपयोग करके उत्पन्न किए जाते हैं। हालांकि कोई भी भविष्यवाणी पूर्ण नहीं होती है, ये अलर्ट अनुमान और जोखिम को काफी कम कर देते हैं।" }
                        ]
                    },
                    {
                        "title": "सिंचाई और जल प्रबंधन",
                        "items": [
                            { "q": "सिंचाई अलर्ट पानी के उपयोग को कम करने में कैसे मदद करते हैं?", "a": "सिंचाई अलर्ट किसानों को तभी सूचित करते हैं जब फसलों को वास्तव में पानी की आवश्यकता होती है, जिससे अधिक सिंचाई से बचने, पानी की बर्बादी कम करने और ऊर्जा लागत कम करने में मदद मिलती है।" },
                            { "q": "क्या ये समाधान मौजूदा सिंचाई प्रणालियों के साथ काम कर सकते हैं?", "a": "हाँ। सलाह सिंचाई पद्धति से स्वतंत्र हैं और इसे ड्रिप, स्प्रिंकलर, फ्लड इरिगेशन या किसी भी मौजूदा सेटअप पर लागू किया जा सकता है।" },
                            { "q": "मुझे कैसे पता चलेगा कि मेरी फसल को वास्तव में कब पानी चाहिए?", "a": "मिट्टी की नमी डेटा, मौसम की स्थिति और फसल विकास चरण का उपयोग करके, सिंचाई सलाह निश्चित कार्यक्रमों पर भरोसा करने के बजाय पानी देने के लिए सही समय और आवृत्ति का संकेत देती है।" }
                        ]
                    },
                    {
                        "title": "संरक्षित खेती और एग्री प्लास्टिक",
                        "items": [
                            { "q": "संरक्षित खेती क्या है और इसका उपयोग कब किया जाना चाहिए?", "a": "संरक्षित खेती में फसलों को कीटों, मौसम के तनाव और नमी के नुकसान से बचाने के लिए मल्च फिल्म, शेड नेट, कीट नेट और फसल कवर जैसी सामग्रियों का उपयोग करना शामिल है। यह उच्च मूल्य वाली और संवेदनशील फसलों के लिए विशेष रूप से उपयोगी है।" },
                            { "q": "मल्चिंग फिल्में फसल की पैदावार कैसे सुधारती हैं?", "a": "मल्चिंग फिल्में मिट्टी की नमी बनाए रखने, खरपतवार को नियंत्रित करने, मिट्टी के तापमान को विनियमित करने और पोषक तत्वों के नुकसान को कम करने में मदद करती हैं, जिससे फसल का विकास स्वस्थ होता है और पैदावार में स्थिरता आती है।" },
                            { "q": "शेड नेट और कीट नेट में क्या अंतर है?", "a": "शेड नेट सूरज की रोशनी की तीव्रता और तापमान को नियंत्रित करते हैं, जबकि कीट नेट शारीरिक रूप से कीटों को फसल क्षेत्रों में प्रवेश करने से रोकते हैं। दोनों फसल सुरक्षा में अलग-अलग लेकिन पूरक उद्देश्यों को पूरा करते हैं।" },
                            { "q": "क्या एग्री-प्लास्टिक उत्पाद सभी फसलों के लिए उपयुक्त हैं?", "a": "अधिकांश एग्री-प्लास्टिक उत्पाद फसलों के अनुकूल होते हैं, लेकिन चयन फसल के प्रकार, जलवायु और खेती के अभ्यास पर निर्भर करता है। सही सामग्री का चयन अधिकतम लाभ सुनिश्चित करता है।" }
                        ]
                    },
                    {
                        "title": "कारन्वयन और उपयोग",
                        "items": [
                            { "q": "क्या इन समाधानों का उपयोग करने के लिए तकनीकी विशेषज्ञता की आवश्यकता है?", "a": "किसी भी उन्नत तकनीकी ज्ञान की आवश्यकता नहीं है। सिस्टम को किसान-अनुकूल बनाने के लिए डिज़ाइन किया गया है, जिसमें अंतर्दृष्टि और सलाह सरल, कार्रवाई योग्य प्रारूपों में प्रस्तुत की जाती है।" },
                            { "q": "एक किसान कितनी जल्दी लाभ देखना शुरू कर सकता है?", "a": "बेहतर सिंचाई निर्णय और कम तनाव जैसे कुछ लाभ हफ्तों के भीतर दिखाई देते हैं, जबकि पैदावार और लागत में सुधार पूरे फसल चक्र में स्पष्ट हो जाते हैं।" },
                            { "q": "क्या ये समाधान स्थान-विशिष्ट या फसल-विशिष्ट हैं?", "a": "ये क्षेत्रों और फसलों के अनुकूल हैं, जिसमें स्थानीय जलवायु, मिट्टी की स्थिति और फसल के प्रकार के आधार पर सिफारिशें तैयार की जाती हैं।" }
                        ]
                    }
                ]
            }
        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
