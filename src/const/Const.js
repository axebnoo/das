export const ConstCss = {
    boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
    flexCenter: {
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex'
    },
    textNormal: {
        fontSize: 14,
        color: '#212121'
    }
};

export const Color = {
    white: '#ffffff',
    black: '#000000',
    primary: '#0358A7',
    grayBackground: '#F7F7F7',
    grayHeaderBack: '#F2F2F2',
    backText: '#212121',
    blue: '#0358A7',
    blueBackground: '#0358A7',
    yellow: '#FFC700',
    gray: '#828282',
    graySecond: '#6A6D70',
    grayText: '#605E5C',
    blackSecond: '#32363A',
    red: '#ff0000',
    grayNoData: '#BABABA',
    greyTableText: '#201F1E',
    warn: '#E9730C',
    tagPrimary: '#CAE4F3',
    tagSecondary: '#E9E9E9',
    grayButton: '#CCCCCC',
    blueLink: '#0854A0'
};

export const uploadFileFormat = [
    {
        filetype: ".txt",
        name: "text/plain"
    }, {
        filetype: ".pdf",
        name: "application/pdf"
    },
    {
        filetype: ".docx",
        name: "application/vnd.ms-word"
    }, {
        filetype: ".xls",
        name: "application/vnd.ms-excel"
    }, {
        filetype: ".xlsx",
        name: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    },
    {
        filetype: ".png",
        name: "image/png"
    }, {
        filetype: ".jpg",
        name: "image/jpeg"
    }, {
        filetype: ".jpeg",
        name: "image/jpeg"
    }, {
        filetype: ".gif",
        name: "image/gif"
    }, {
        filetype: ".csv",
        name: "text/csv"
    }
];

export const constData = {
    rol_status: [
        {
            "key": "Y",
            "text": "Идэвхтэй"
        },
        {
            "key": "N",
            "text": "Идэвхгүй"
        },
    ],
    sidepartment_status: [
        {
            "key": "Active",
            "text": "Идэвхтэй"
        },
        {
            "key": "Inactive",
            "text": "Идэвхгүй"
        },
        {
            "key": "Liquidate",
            "text": "Татан буугдсан"
        }
    ],
    hrManagerPos_Type: [
        {
            "key": "D",
            "text": "Шууд удирдлага"
        },
        {
            "key": "N",
            "text": "Чиг үүргийн удирдлага"
        },
        {
            "key": "R",
            "text": "Тайлагнах удирдлага"
        },
        {
            "key": "L",
            "text": "Шугаман удирдлага"
        }
    ],
    Gender: [
        {
            "key": "M",
            "text": "Эр"
        },
        {
            "key": "F",
            "text": "Эм"
        }
    ],
    hrEmpdPunishment_Type: [
        {
            "key": 1,
            "text": "Сануулах"
        },
        {
            "key": 2,
            "text": "Цалинг хувиар бууруулах"
        },
        {
            "key": 3,
            "text": "Төрийн албанд 3 жил эргэж орохгүйгээр халах"
        },
        {
            "key": 4,
            "text": "Төрийн албанаас халах"
        }
    ],
    MaritalStatus: [
        {
            "key": "M",
            "text": "Гэрлэсэн"
        },
        {
            "key": "U",
            "text": "Гэрлээгүй"
        },
        {
            "key": "W",
            "text": "Бэлэвсэн"
        },
        {
            "key": "K",
            "text": "Тодорхойгүй"
        }
    ],
    hrEmployee_BloodGroup: [
        {
            "key": "0",
            "text": "-"
        },
        {
            "key": "1",
            "text": "1"
        },
        {
            "key": "2",
            "text": "2"
        },
        {
            "key": "3",
            "text": "3"
        },
        {
            "key": "4",
            "text": "4"
        }
    ],
    hrEmpRank_Type: [
        {
            "key": "G",
            "text": "Зэрэг"
        },
        {
            "key": "R",
            "text": "Цол"
        }
    ],
    hrEmpTraining_Type: [
        {
            "key": "S",
            "text": "Хувиараа"
        },
        {
            "key": "C",
            "text": "Байгууллагаас"
        },
        {
            "key": "A",
            "text": "Өөр байгууллагаас"
        }
    ],
    pensionEmployee_Status: [
        {
            "key": "active",
            "text": "Тэтгэвэрт гарах"
        },
        {
            "key": "closed",
            "text": "Тэтгэвэрт гарсан"
        },
    ],
    hrBenefitPackageDtl_FreqType: [
        {
            "key": "D",
            "text": "Өдөр"
        },
        {
            "key": "M",
            "text": "Сар"
        }
    ],
    Gov_shift_Type: [
        {
            "key": "SH",
            "text": "Албан байгууллага дотор шилжсэн"
        },
        {
            "key": "SJ",
            "text": "Албан тушаал дэвшүүлсэн"
        },
        {
            "key": "SD",
            "text": "Албан тушаал буурсан"
        },
        {
            "key": "SP",
            "text": "Түдгэлзүүлсэн"
        },
        {
            "key": "PS",
            "text": "Төрийн албаны ангилал, зэрэглэлд өөрчлөлт оруулсан"
        },
        {
            "key": "SL",
            "text": "Цалинд өөрчлөлт орсон"
        },
        {
            "key": "IT",
            "text": "Даатгуулагчийн төрөл өөрчлөгдсөн"
        },
        {
            "key": "LC",
            "text": "Хөдөлмөрийн нөхцөл өөрчлөгдсөн"
        },
        {
            "key": "SC",
            "text": "Бүтцийн өөрчлөлт"
        }
    ],
    Gov_Terminate_Type: [
        {
            "key": "MV",
            "text": "Байгууллага хооронд шилжүүлэн томилсон"
        },
        {
            "key": "MR",
            "text": "Байгууллага хооронд сэлгэн шилжүүлсэн"
        },
        {
            "key": "IN",
            "text": "Ажлаас халсан"
        },
        {
            "key": "IE",
            "text": "Ажилтны санаачлагаар чөлөөлсөн"
        },
        {
            "key": "IL",
            "text": "Түр чөлөөлсөн"
        },
        {
            "key": "IC",
            "text": "Тэтгэвэрт гарсан"
        },
        {
            "key": "ID",
            "text": "Нас барсан"
        },
        {
            "key": "IA",
            "text": "Сонгуулийн үр дүнгээр чөлөөлсөн"
        },
        {
            "key": "CE",
            "text": "Гэрээний хугацаа дууссан"
        },
        {
            "key": "LV",
            "text": "Чөлөөлсөн"
        }
    ],
    hrContract_LabourCondition: [
        {
            "key": "N",
            "text": "Хэвийн"
        },
        {
            "key": "A",
            "text": "Хэвийн бус"
        },
        {
            "key": "H",
            "text": "Хүнд"
        },
        {
            "key": "P",
            "text": "Хортой"
        },
        {
            "key": "W",
            "text": "Халуун"
        }
    ],
    Gov_Employment_Type: [
        {
            "key": "OT",
            "text": "Өөр байгууллагад ажилласан түүх"
        },
        {
            "key": "HR",
            "text": "Ажилд авсан түүх"
        },
        {
            "key": "SH",
            "text": "Дотоод хөдөлгөөний түүх"
        },
        {
            "key": "TR",
            "text": "Ажлаас чөлөөлсөн түүх"
        }
    ],
    Gov_Employment_Type_Double_Emp: [
        {
            "key": "HR",
            "text": "Ажилд авсан түүх"
        },
        {
            "key": "SH",
            "text": "Дотоод хөдөлгөөний түүх"
        },
        {
            "key": "TR",
            "text": "Ажлаас чөлөөлсөн түүх"
        }
    ],
    hrEmployee_Status: [
        {
            "key": "ACTIVE",
            "text": "Ажиллаж байгаа",
            "description": "Давхар ажил эрхлэлт, Идэвхтэй, Түр чөлөөлсөн"
        },
        {
            "key": "INACTIVE",
            "text": "Ажиллахгүй байгаа",
            "description": "Бүртгэсэн, Ажлаас гарсан",
            "divider": true
        },
        {
            "key": "RG",
            "text": "Бүртгэсэн"
        },
        {
            "key": "AC",
            "text": "Идэвхтэй"
        },
        {
            "key": "AC1",
            "text": "Давхар ажил эрхлэлт"
        },
        {
            "key": "IL",
            "text": "Түр чөлөөлсөн"
        },
        {
            "key": "IN",
            "text": "Ажлаас гарсан"
        }
    ],
    hrEmployee_Status_Resource_Filter: [
        {
            "key": "ACTIVE",
            "text": "Нөөц",
            "description": "Ерөнхий шалгалт өгч тэнцсэн нөөц, Удирдах ажилтн..."
        },
        {
            "key": "INACTIVE",
            "text": "Нөөцөөс хасагдсан",
            "description": "Нөөцөөс хасагдсан"
        },
        {
            "key": "BLACKLIST",
            "text": "Хар жагсаалт",
            "description": "Хар жагсаалт",
            "divider": true
        },
        {
            "key": "F1",
            "text": "Ерөнхий шалгалт өгч тэнцсэн нөөц"
        },
        {
            "key": "F2",
            "text": "Удирдах ажилтны нөөц"
        },
        {
            "key": "F3",
            "text": "Төрийн жинхэнэ албаны нөөц"
        },
        {
            "key": "F4",
            "text": "Төрийн үйлчилгээний удирдах ажилтны нөөц"
        },
        {
            "key": "F5",
            "text": "Ажиллаж байгаа нөөц"
        },
        {
            "key": "F6",
            "text": "Нөөцөөс хасагдсан"
        },
        {
            "key": "F7",
            "text": "Хар жагсаалтанд бүртгэгдсэн"
        }
    ],
    hrEmployee_Status_Resource: [
        {
            "key": "F1",
            "text": "Ерөнхий шалгалт өгч тэнцсэн нөөц"
        },
        {
            "key": "F2",
            "text": "Удирдах ажилтны нөөц"
        },
        {
            "key": "F3",
            "text": "Төрийн жинхэнэ албаны нөөц"
        },
        {
            "key": "F4",
            "text": "Төрийн үйлчилгээний удирдах ажилтны нөөц"
        },
        {
            "key": "F5",
            "text": "Ажиллаж байгаа нөөц"
        },
        {
            "key": "F6",
            "text": "Нөөцөөс хасагдсан"
        },
        {
            "key": "F7",
            "text": "Хар жагсаалтанд бүртгэгдсэн"
        }
    ],
    siDepartment_DepType: [
        {
            "key": "B",
            "text": "Салбар"
        }
    ],
    hrPosition_Type: [
        {
            "key": "B",
            "text": "Үндсэн"
        },
        {
            "key": "C",
            "text": "Гэрээт"
        }
    ],
    Role_Module_Access: [
        {
            "key": "Edit",
            "text": "Засах"
        },
        {
            "key": "View",
            "text": "Харах"
        },
        {
            "key": "NoAccess",
            "text": "Эрхгүй"
        }
    ],
    Role_Type: [
        {
            "key": "System",
            "text": "Системийн"
        },
        {
            "key": "Custom",
            "text": "Үүсгэсэн"
        }
    ],
    User_Status_Filter: [
        {
            "key": "All",
            "text": "Бүгд"
        }
    ],
    User_Status: [
        {
            "key": "A",
            "text": "Идэвхтэй"
        },
        {
            "key": "L",
            "text": "Түгжсэн"
        },
        {
            "key": "I",
            "text": "Идэвхгүй"
        },
        {
            "key": "D",
            "text": "Устгасан"
        }
    ],
    hrempinvalid_reason: [
        {
            "key": "trauma",
            "text": "Гэмтлээр"
        },
        {
            "key": "disease",
            "text": "Өвчнөөр"
        },
        {
            "key": "congenital",
            "text": "Төрөлхийн"
        }
    ],
    hrempinvalid_duration: [
        {
            "key": "IA",
            "text": "3 сар"
        },
        {
            "key": "IB",
            "text": "6 сар"
        },
        {
            "key": "IC",
            "text": "12 сар"
        },
        {
            "key": "ID",
            "text": "18 сар"
        },
        {
            "key": "IE",
            "text": "24 сар"
        },
        {
            "key": "IF",
            "text": "Хугацаагүй"
        }
    ],
    hrempinvalid_desiction: [
        {
            "key": "Agreed",
            "text": "Тогтоосон"
        },
        {
            "key": "Canceled",
            "text": "Цуцалсан"
        }
    ],
    hrExtra_CalcType: [
        {
            "key": "PT",
            "text": "Хувиар"
        },
        {
            "key": "AT",
            "text": "Дүнгээр"
        }
    ],
    hrExtra_CalcType_Symbol: [
        {
            "key": "PT",
            "text": "%"
        },
        {
            "key": "AT",
            "text": "₮"
        }
    ],
    hrExtra_CalcMethod: [
        {
            "key": "SA",
            "text": "Тодорхой дүнгээр"
        },
        {
            "key": "SR",
            "text": "Дээд доод хязгаараар"
        }
    ],
    hrExtra_Frequency: [
        {
            "key": "DY",
            "text": "Өдрөөр"
        },
        {
            "key": "MT",
            "text": "Сараар"
        },
        {
            "key": "SE",
            "text": "Улирлаар"
        }
    ],
    hrSalarySchema_Grade: [
        {
            "key": "ТТ",
            "text": "Төрийн тусгай"
        },
        {
            "key": "ТӨ",
            "text": "Төрийн өндөр"
        },
        {
            "key": "АА",
            "text": "Төрийн захиргаа /Ажлын алба/"
        },
        {
            "key": "ТЗ",
            "text": "Төрийн захиргаа"
        },
        {
            "key": "ТҮ",
            "text": "Төрийн үйлчилгээ /эрүүл мэндээс бусад/"
        },
        {
            "key": "БТҮ",
            "text": "Төрийн үйлчилгээ /эрүүл мэндийн бусад/"
        },
        {
            "key": "ТҮБД",
            "text": "Төрийн үйлчилгээ /боловсрол/"
        },
        {
            "key": "ТҮМБ",
            "text": "Төрийн үйлчилгээ /мэргэжлийн байгууллага/"
        },
        {
            "key": "ТҮСУ",
            "text": "Төрийн үйлчилгээ /соёл урлаг/"
        },
        {
            "key": "ТҮШУ",
            "text": "Төрийн үйлчилгээ /шинжлэх ухаан/"
        },
        {
            "key": "ТҮЭМ",
            "text": "Төрийн үйлчилгээ /эрүүл мэнд/"
        },
        {
            "key": "ҮА",
            "text": "Төрийн тусгай /аудит/"
        },
        {
            "key": "ШҮ",
            "text": "Төрийн тусгай /шүүгч/"
        },
        {
            "key": "ПРО",
            "text": "Төрийн тусгай /прокурор/"
        },
        {
            "key": "ИТХТ",
            "text": "Төрийн улс төрийн /ИТХ-ын төлөөлөгч/"
        },
        {
            "key": "ТУТ",
            "text": "Төрийн улс төрийн"
        },
        {
            "key": "Аудит",
            "text": "Төрийн тусгай /Аудит/"
        }
    ],
    year: [
        {
            "key": "2021",
            "text": "2021"
        },
        {
            "key": "2020",
            "text": "2020"
        },
        {
            "key": "2019",
            "text": "2019"
        },
        {
            "key": "2018",
            "text": "2018"
        }
    ],
    hrBasis_Type: [
        {
            "key": "EE",
            "text": "Ажил эрхлэлт"
        },
        {
            "key": "ED",
            "text": "Сахилгын шийтгэл"
        }
    ]
}