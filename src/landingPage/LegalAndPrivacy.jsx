import imageOne from "../assets/products/product_1.png";
import imageTwo from "../assets/products/product_2.png";
import imageThree from "../assets/products/product_3.png";
import legal from "../assets/legal.jpg";
const LegalAndPrivacy = () => {
  const products = [
    { image: imageOne },
    { image: imageTwo },
    { image: imageThree },
    { image: imageThree },
    { image: imageThree },
  ];
  return (
    <>
      <section className="my-16">
        <div className="container mx-auto">
          <div>
            <div className="flex my-12 items-center gap-8">
              <div className="flex-1">
                <h2 className="leading-tight p-4 border-b-2 mx-auto text-2xl md:text-4xl lg:text-5xl">
                  القوانين والخصوصية
                </h2>
                <h2 className="leading-tight p-4  mx-auto text-2xl md:text-4xl lg:text-5xl">
                  الترخيص
                </h2>
              </div>
            </div>
            <div className="relative mt-32 flex justify-center	">
              <img src={legal} alt="" />
              {/* {products.map((product, index) => (
                <div
                  key={index}
                  style={{
                    zIndex: 10 - index,
                    transform: `translateY(${index * 20 - 50}px)`,
                  }}
                  className="sm:h-[480px] flex sm:flex-row flex-col  items-center gap-4 sm:gap-8 sticky bottom-[50px] mx-auto -translate-y-1 p-8 md:p-16 rounded-lg border border-mainBorders bg-main shadow-lg"
                >
                  <img
                    src={product.image}
                    className="sm:w-[50%] max-h-full border-4 rounded-xl border-mainBorders"
                    alt=""
                  />{" "}
                  <div className="sm:w-[50%]">
                    <h3 className="text-2xl md:text-3xl font-semibold ">
                      Committee located in Tyttenhanger Parks
                    </h3>
                    <p className="my-8 text-sm sm:text-base">
                      At the heart of our commitment to excellence in investment
                      management lies our strategic location within the serene
                      and historic Tyttenhanger Park, St Albans, Hertfordshire,
                      AL4 0PG
                    </p>
                    <p className="text-mainBorders text-sm sm:text-base">
                      Our choice of location in Tyttenhanger Park speaks volumes
                      about our commitment to providing a serene and focused
                      environment for our team
                    </p>
                  </div>
                </div>
              ))} */}
            </div>
          </div>
        </div>
        <div className="container py-16 legal space-y-6">
          <h2>الشروط والأحكام</h2>
          <b>تاريخ النفاذ : 2023 ,11 March</b>
          <p>
            تحكم هذه الشروط والأحكام ) يُشار إليها فيما بعد باسم "الشروط "أو
            "الشروط والأحكام (استخدامك أو زيارتك لما يلي
          </p>
          <p>
            الموقع الإلكتروني المتاح من خلال العنوان الإلكتروني
            Https://www.thenewnormal.trade/new/
          </p>
          <p>
            يُشار إليها إجمالاً فيما بعد باسم "الخدمة" ، "خدمتنا" ، "خدماتنا"،
            أو "الخدمات"، حسب ما تقتضيه الحالة يُشار إليها فيما بعد باسم "نحن
            "أو "لنا"، حسب ما تقتضيه الحالة ) تقوم The new normal ، بإدارة
            وتشغيل الخدمات يرجى قراءة هذه الشروط بعناية لأنها تحتوي على معلومات
            مهمة حول حقوقك ، ومعالجاتك والتزاماتك
          </p>
          <p>
            تحكم هذه الشروط استخدامك أو زيارتك للخدمة وهي مشروطة بقبولك لهذه
            الشروط والامتثال لها تنطبق هذه الشروط على ،جميع الزوار والمستخدمين
            والآخرين الذين يزورن الخدمة أو يستخدمونها (يُشار إليها إجمالاً فيما
            بعد باسم "أنت "، "مستخدم . مستخدمون "أو "مستخدمين، حسب ما تقتضيه
            الحالة" من خلال زيارتك للخدمات أو استخدامها ، فإنك تؤكد موافقتك على
            الالتزام بهذه الشروط ، وسياسة الخصوصية الخاصة بنا ، والتي تم تضمينها
            في هذه الشروط وجعلها جزءا منها ، وسياساتنا الأخرى المعمول بها
          </p>
          <p>
            إذا لم توافق على هذه الشروط ، لا يجوز لك استخدام الخدمة . هذه الشروط
            تحل محل الاتفاقات أو الترتيبات السابقة معك إن وجدت يجوز لنا إنهاء
            هذه الشروط أو أي خدمات فورًا فيما يتعلق بك ، أو التوقف بشكل عام عن
            عرض الخدمة أو أي جزء منها ، في أي وقت ولأي سبب.
          </p>
          <h2>المدفوعات والمشتريات</h2>
          <p>
            أنت تدرك أن استخدام الخدمات قد يؤدي إلى عمليات الشراء التي تقوم بها
            للخدمات أو السلع التي تتلقاها ("الشراء" أو "المشتريات" ، عند إجراء
            عملية شراء ، قد يُطلب منك تقديم معلومات ذات صلة بعملية الشراء ، بما
            في ذلك . على سبيل المثال لا الحصر ، رقم بطاقتك الائتمانية وتاريخ
            انتهاء صلاحية بطاقتك الائتمانية واسمك ورقم هاتفك وعنوان إرسال
            الفواتير ومعلومات الشحن الخاصة بك .
          </p>
          <h3>: أنت تؤكد وتضمن ما يلي</h3>
          <ul>
            <li>
              ۱ - استخدام وسائل الدفع المتوفرة لدينا ( بطاقات ائتمان أو فيزا او
              ماستر كارد او الطرق الأخرى المتاحة ).
            </li>
            <li>٢- المعلومات التي تزودنا بها صحيحة وكاملة</li>
            <li>- معلومات الدفع المدخلة من قبلك متطابقة مع بيانات الحساب.</li>
          </ul>
          <p>
            من خلال تقديم هذه المعلومات، فإنك تمنحنا الحق في تقديم المعلومات إلى
            أطراف ثالثة لأغراض تسهيل إتمام عمليات ، الشراء أو أي معلومات | أخرى
            ذات صلة نراها ضرورية لعملية الشراء .
          </p>
          <p>
            يتم توفير خدمات معالجة الدفع بواسطة معالج دفع تابع لجهة خارجية من
            خلال إكمال عملية شراء من خلال الخدمة ، فإنك توافق على الالتزام ببنود
            وشروط معالجي الدفع الخارجيين ، والتي قد يتم تعديلها من وقت لآخر.
            كشرط لتمكيننا من خدمات . معالجة الدفع من خلال أي من هذه الأطراف
            الثالثة ، فإنك تفوضنا على أداء جميع الأنشطة اللازمة لتسهيل هذه
            المدفوعات نحتفظ بالحق في تبديل موردي معالجة الدفع أو استخدام
            البائعين البديلين أو الاحتياطيين وفقا لتقديرها.
          </p>
          <p>
            نحتفظ بالحق في رفض أو إلغاء طلب الشراء الخاص بك في أي وقت ولأي سبب ،
            على سبيل المثال لا الحصر :توفر المنتج أو الخدمة ، أو أخطاء في وصف أو
            سعر المنتج أو الخدمة ، أو خطأ في طلبك أو غير ذلك من أسباب
          </p>
          <p>
            نحتفظ بالحق في إنهاء أي خدمة ورفض أو إلغاء طلب الشراء الخاص بك في
            حالة عدم تطابق اسم الحساب مع معلومات الدفع او في حالة الاشتباه في
            الاحتيال أو معاملة غير مصرح بها أو غير قانونية أي قرار من هذا
            الاحتيال أو عدم القانونية يجب أن يتم حسب تقديرنا الوحيد
          </p>
          <h2>التوافر وعدم الدقة</h2>
          <p>
            نحتفظ بالحق في تغيير أو تحديث المعلومات المقدمه و في حال التحديث او
            التعديل في الخدمه نتعهد في توضيح المعلومات للعميل، لا يوجد تحديث
            محدد أو تاريخ تحديث مطبق في الخدمة
          </p>
          <h2>العروض الترويجية</h2>
          <p>
            عبر قد تخضع أي مسابقات أو عروض ترويجية أخرى يُشار إليها إجمالاً باسم
            (عروض الترويجية"، أو "عروض") متاحة : الخدمة بقواعد منفصلة عن هذه
            الشروط إذا شاركت في أي عروض ترويجية ، يرجى مراجعة القواعد المعمول
            بها وكذلك سياسة الخصوصية الخاصة بنا إذا كانت قواعد الترويج تتعارض مع
            هذه الشروط ، فسيتم تطبيق قواعد الترويج. قد نعمل مع أطراف ثالثة
            لتقديم خدمات في هذه الحالة ، نحن لسنا مسؤولين عن المنتجات والخدمات
            التي تقدمها هذه الأطراف الثالثة .
          </p>
          <h2>المنتجات والخدمات</h2>
          <p>
            نحن نطمح بتقديم افضل ما لدينا و بذلنا كل جهد ممكن لنعكس بأكبر قدر
            ممكن من الدقة في وصف منتجاتنا وخدماتنا. تحتفظ بالحق في أي وقت بتعديل
            أو إيقاف الخدمة أو أي جزء أو محتوى منها لن تكون مسؤولين تجاهك أو
            تجاه أي طرف ثالث عن أي تعديل أو تغيير في الأسعار أو تعليق أو إيقاف
            الخدمة.
          </p>
          <h2>حدود البيع</h2>
          <p>
            نحن نحتفظ بالحق ، ولكننا غير ملزمين ، بالحد من مبيعات منتجاتنا أو
            خدماتنا لأي شخص أو منطقة جغرافية أو ولاية قضائية . يجوز لنا ممارسة
            هذا الحق على أساس كل حالة على حدة. نحتفظ بالحق في تحديد أي منتجات أو
            خدمات نقدمها تخضع جميع أوصاف المنتجات والخدمات أو أسعا رهم للتغيير
            في أي وقت دون إشعار ، وفقا لتقديرنا المطلق . نحتفظ بالحق في إيقاف أي
            منتج او خدمه في أي وقت يعتبر أي عرض لأي منتج أو خدمة يتم تقديمه على
            هذه الخدمة لاغياً حيثما يكون محظوراً.
          </p>
          <h2>الحسابات</h2>
          <p>
            قد تحتاج إلى إنشاء حساب لاستخدام الخدمات يجب أن تزودنا بمعلومات
            دقيقة وكاملة وحديثة في جميع الأوقات يشكل الفشل في القيام بذلك خرقا
            للشروط ، مما قد يؤدي إلى الإنهاء الفوري لحسابك على الخدمة وسيتم
            اقصاءك من جميع الخدمات المقدمة من قبلنا.
          </p>
          <p>
            أنت مسؤول عن حماية حسابك ، لذا استخدم كلمة مرور قوية وقصر استخدامها
            على هذا الحساب لا يمكننا ولن نكون مسؤولين عن أي خسارة أو ضرر ناجم عن
            إخفاقك في الامتثال لما سبق.
          </p>
          <p>
            لا يجوز لك استخدام كاسم مستخدم أو اسم عرض أو تحميل محتوى شخص أو كيان
            آخر غير متاح للاستخدام بشكل قانوني أو اسم أو علامة تجارية تخضع لأي
            حقوق لشخص أو كيان آخر غيرك دون إذن مناسب ، أو اسم مسيء أو مبتذل أو
            بذيء.
          </p>
          <h2>إنهاء الحسابات</h2>
          <p>
            يجوز لنا تعليق حسابك أو إنهائه أو التوقف عن تزويدك بكافة الخدمات أو
            جزء منها في أي وقت لأي سبب أو بدون سبب ، بما في ذلك ، على سبيل
            المثال لا الحصر ، إذا اعتقدنا بشكل معقول أ أنك تخلق خطرًا أو تعرضا
            قانونيا محتملا لنا ؛ )
          </p>
          <p>
            ب ( يجب إزالة حسابك بسبب سلوك غير قانوني ؛ ( ج يجب إزالة حسابك بسبب
            عدم النشاط لفترات طويلة ؛ )د (أنك تحاول إرسال رسائل غير مرغوب فيها
            أو تصيد احتيالي ( هـ (تحاول حث الآخرين على أداء أو المشاركة في أي
            أعمال غير قانونية ؛ ) و (تحاول مضايقة أو إساءة أو إهانة أو إيذاء أو
            تشهير أو قذف أو تحقير أو تخويف أو تمييز على أساس الجنس أو الدين أو
            العرق أو العمر أو الأصل القومي أو الإعاقة ؛ ) ز (حاولت تقديم معلومات
            كاذبة أو مضللة ؛ ) ج (حاولت تحميل أو نقل فيروسات أو أي نوع آخر من
            التعليمات البرمجية الضارة التي قد تستخدم بأي طريقة تؤثر على وظيفة أو
            تشغيل الخدمة أو أي موقع ويب ذي صلة أو مواقع ويب أخرى أو الإنترنت ؛ ط
            (أنك تحاول جمع أو تتبع المعلومات الشخصية للآخرين ؛ )ي (أنك تحاول
            التدخل أو التحايل على ميزات الأمان الخاصة بالخدمة أو أي موقع ويب ذي
            صلة أو مواقع ويب أخرى أو الإنترنت ؛ )ك انتهاك أي من الاستخدامات
            المحظورة ؛ ) ل (إذا لم يعد توفير الخدمات لك صالحًا تجاريًا ؛ أو )م
            (إذا حاولت أو انتهكت حقوق الملكية الفكرية الخاصة بنا أو حقوق الملكية
            الفكرية للآخرين
          </p>
          <p>
            عند إنهاء الحساب ، يتوقف حقك في استخدام الخدمة على الفور إذا كنت
            ترغب في إنهاء حسابك، يمكنك ببساطة التوقف عن استخدام الخدمة.
          </p>
          <h2>الملكية الفكرية</h2>
          <p>
            الخدمة وجميع النصوص والرسومات والمحتوى التحريري والبيانات والتنسيق
            والرسوم البيانية والمظهر والأسلوب والصور والموسيقى والأصوات والصور
            والشعار والبرامج ومقاطع الفيديو والتصاميم والعلامات التجارية
            والشعارات والخطوط وغيرها من المحتويات الأصلية، والميزات والوظائف في
            الخدمة، بالإضافة إلى الاختيار، والترتيب ، والتحسين فيها ، هي ملكية
            حصر سرية لنا والمرخصين لنا وستظل كذلك الخدمة محمية بموجب حقوق الطبع
            والنشر والعلامات التجارية وغيرها من القوانين في كل من المملكة
            العربية السعودية والامارات و دول الشرق الأوسط والدول الأجنبية لا
            يجوز استخدام علاماتنا التجارية وثيابنا التجارية فيما يتعلق بأي منتج
            أو خدمة بدون موافقة خطية مسبقة.
          </p>
          <p>
            لا يجوز للمستخدمين نسخ أي شيء من الخدمات أو تنزيله أو استخدامه أو
            إعادة تصميمه أو إعادة تكوينه أو إعادة إرساله بدون موافقة كتابية
            صريحة مسبقة من جانبنا ، وحامل حقوق المحتوى ، يُحظر صراحةً أي استخدام
            لهذه المواد ، بخلاف ما هو مسموح به، دون إذننا المسبق ، وإذن حامل
            حقوق المحتوى.
          </p>
          <h2>الأطراف الثالثة</h2>
          <p>
            قد نوفر لك إمكانية زيارة أو استخدام منتجات أو خدمات أو أدوات أو
            روابط تابعة لجهات خارجية يُشار إليها إجمالاً باسم (" الأدوات "أو
            "أدوات) ولا نملك أي تحكم لها .
          </p>
          <p>
            أنت تقر وتوافق على أن هذه الأدوات يتم توفيرها على أساس "كما هي "و"
            "كما هو متوفر "، دون أي ضمانات أو إقرارات أو شروط من أي نوع وبدون أي
            موافقة لن نتحمل أية مسؤولية من أي نوع تنشأ عن أو تتعلق باستخدامك
            لأدوات الطرف الثالث يخضع استخدام أي أدوات تمتلكها أو تديرها أطراف
            ثالثة لشروط وأحكام الاستخدام وسياسات الخصوصية لتلك الأدوات يمكنك
            زيارة أو استخدام هذه الأدوات على مسؤوليتك الخاصة. نحن نخلي مسؤوليتنا
            عن أي مسؤولية تنشأ فيما يتعلق باستخدامك و أو عرضك لأية أدوات أو مواد
            أخرى مرتبطة بالأدوات التي قد تظهر في الخدمات . أنت توافق بموجب .
            الاتفاقية على اعتبارنا غير مسؤولين من أي مسؤولية قد تنشأ عن استخدام
            الأدوات التي قد تظهر على الخدمة.
          </p>
          <h2>التنصل من الضمانات؛ تحديد المسؤولية</h2>
          <p>نحن لا نضمن أن استخدامك للخدمة لن ينقطع أو يكون آمنا.</p>
          <p>
            نحن لا نضمن أن النتائج التي يمكن الحصول عليها من استخدام الخدمة
            ستكون دقيقة أو موثوقة.
          </p>
          <p>
            أنت توافق على أنه من وقت لآخر قد نقوم بإزالة الخدمة لفترات غير محددة
            من الوقت أو إلغاء الخدمة في أي وقت ، دون إشعار لك
          </p>
          <p>
            أنت توافق على أن استخدامك للخدمة أو عدم قدرتك على استخدامها يقع على
            مسؤوليتك وحدك تقدم الخدمة وجميع المنتجات والخدمات التي يتم تسليمها
            إليك من خلال الخدمة باستثناء ما ننص عليه ( "كما هي "و "كما هو متاح
            لاستخدامك ) دون أي تمثيل أو ضمانات أو شروط من أي نوع صريحة أو ضمنية
            ، بما في ذلك. جميع الضمانات الضمنية أو شروط التسويق والجودة القابلة
            للتسويق ، والصالحية لغرض معين ، وقدرة التحمل ، والنوع نحن لا نتحمل
            أي مسؤولية فيما يتعلق بالعقد أو الضمان أو الضرر فيما يتعلق بأي أولا
            أخطاء أو عدم دقة في المحتوى، من أي نوع ، من أي وقت كانت ناتجة من
            زيارتك أو استخدامك
          </p>
          <p>
            للخدمات ، ثانيا أي وصول إلى خوادمنا الأمنة أو استخدامها و / أو أي
            وجميع المعلومات الشخصية و / أو المعلومات المالية المخزنة فيها، ثالثا
            الأحداث خارجة عن سيطرتنا المعقولة
          </p>
          <p>
            لا تحمل بأي حال من الأحوال مسؤولينا أو مدرائنا أو موظفينا أو الشركات
            التابعة لنا أو وكلاؤنا أو موردينا أو مقدمي الخدمة لنا أو مرخصينا لأي
            إصابة أو خسارة أو مطالبة مباشرة أو غير مباشرة أو قضائية أو غير
            قضائية الأضرار التبعية من أي نوع ، بما في ذلك ، على سبيل المثال لا
            الحصر ، الأرباح المفقودة ، الإيرادات المفقودة ، التوفير المفقودة ،
            فقدان البيانات ، أو أي أضرار مماثلة، سواء كان ذلك في العقد ، أو
            الضرر بما في ذلك الإهمال ناتجة من استخدامك لأي من الخدمات أو أي من
            المنتجات التي تتم باستخدام الخدمة، أو أي مطالبة أخرى تتعلق بأي طريقة
            لاستخدامك للخدمة أو أي منتج ، بما في ذلك ، على سبيل المثال لا الحصر،
            أي ( أخطاء أو عمليات حذف في أي محتوى أو ، ( أي خسارة أو ضرر من أي
            نوع قد تكبده نتيجة استخدام الخدمة أو أي محتوى ) أو منتج تم إرساله أو
            نقله أو توفيره بطريقة أخرى عبر الخدمة ، حتى إذا تم التنبيه بإمكانية
            حدوثه لا تسمح بعض السلطات القضائية باستثناء أو تحديد الأضرار العرضية
            أو التبعية ، لذا قد لا تنطبق القيود المذكورة أعلاه عليك في نطاقها
          </p>
          <p>
            إذا ، بغض النظر عن الاستثناءات السابقة ، قد تم تحديد أننا مسؤولون عن
            الأضرار ، في أي حال من الأحوال لن تكون المسؤولية الإجمالية ، سواء
            نشأت في العقد أو المسؤولية الصارمة أو غيرها أكثر من 5995 او اكثر من
            المبلغ المدفوع من جانبك لنا .
          </p>
          <p>
            بالإضافة إلى ذلك ، لا يجوز لأي فرد أو كيان أن يكون طرفا ثالثا
            مستفيدا من هذه البنود هذه الشروط هي فقط لصالح الأطراف في هذه
            الاتفاقية وليس المقصود بها ولن تفسر على أنها تمنح أي شخص أو كيان
            بخلافك أي مصلحة أو تعويض أو مطالبة أو مسؤولية أو أي حقوق أخرى بما في
            ذلك ، على سبيل المثال لا الحصر ، حقوق أي طرف ثالث مستفيد فيما يتعلق
            ، بأي اتفاق أو حكم وارد في هذه الوثيقة أو تم التفكير فيه بموجبه
          </p>
          <p>
            لا تسمح بعض السلطات القضائية باستثناء بعض الضمانات أو تحديد
            المسؤولية عن الأضرار التبعية أو العرضية ، لذلك قد لا تنطبق عليك بعض
            جوانب القيود المذكورة أعلاه
          </p>
          <h2>التعويض</h2>
          <p>
            أنت توافق بموجب هذه الاتفاقية على تعويضنا والدفاع عننا وعدم إلحاق
            الضرر بنا والشركات التابعة لنا ومحامينا وشركات التأمين لدينا ومقدمي
            الخدمات والخلفاء والمتنازل لهم الأطراف المحمية " من وضد أي وجميع
            المطالبات والأضرار ، والمصروفات والخسائر والالتزامات الحكومية
            والدعاوى و أو الخلافات من جميع الأنواع ، المعروفة وغير المعروفة
            المشتبه فيها وغير المشتبه فيها ، التي تم الكشف عنها وغير المكشوف
            عنها ، المباشرة ، و الغير المباشرة ، العرضية ، الفعلية التبعية ،
            الاقتصادية ، الخاصة ، أو النموذجية ، بما في ذلك رسوم المحامين
            والتكاليف المتكبدة فيما يتعلق بـ ١ استخدامك أو ، عدم قدرتك على
            استخدام الخدمات ، أو ۲ خرقك أو انتهاكك لهذه الشروط ؛ (۳) انتهاكك لأي
            قانون أو حقوق أي مستخدم أو طرف ثالث ) ٤ (أي محتوى تقدمه أنت أو عبر
            استخدامك لحسابك في الخدمات، بما في ذلك ، على سبيل المثال لا الحصر
            مدى انتهاك هذا المحتوى لحقوق طرف ثالث بشكل غير قانوني نحن نحتفظ
            بالحق ، وفقا لتقديرنا الخاص ، في تولي الدفاع الحصري والتحكم على
            نفقتنا الخاصة في أي مسألة تخضع لتعويضك لن تقوم، على أي حال، بتسوية
            أي مطالبة أو مسألة بدون موافقة خطية مسبقة
          </p>
          <h2>قانون الدولة</h2>
          <p>
            تخضع هذه الشروط وتفسر وفقا لقوانين المملكة العربية السعودية ، بغض
            النظر عن تعارضها مع أحكام القانون لن يعتبر فشلنا في تطبيق أي حق أو
            حكم من هذه الشروط تنازلاً عن هذه الحقوق. إذا اعتبرت المحكمة أن أي
            حكم من هذه الشروط غير صالح أو غير قابل للتنفيذ، فستظل الأحكام
            المتبقية من هذه الشروط سارية تشكل هذه الشروط الاتفاقية الكاملة بيننا
            بخصوص الخدمة ، وتحل محل أي اتفاقيات سابقة قد تكون بيننا فيما يتعلق
            بالخدمة وتحل محلها.
          </p>
          <h2>التعديلات</h2>
          <p>
            قد نقوم بمراجعة هذه الشروط من وقت لآخر. لن تكون التغييرات بأثر رجعي
            ، وستحكم علاقتنا معك أحدث إصدار من الشروط والتي ستكون متاحة دائما
            عند التواصل معنا ، بخلاف التغيرات التي تم إجراؤها لأسباب قانونية ،
            سننبهك من إجراء تغيرات فعالة على هذه الشروط التي قد تؤثر على حقوق أو
            التزامات أي طرف في هذه الشروط ، عبر إشعار في
          </p>
          <p>
            الخدمة أو البريد الالكتروني علي سبيل المثال من خلال الاستمرار في
            زياره او استخدام الخدمات من بعد ان تصبح هذه المراجعات فعاه فإنك
            توافق علي الالتزام بالشروط المعدلة .{" "}
          </p>
          <h2>تواصل معنا</h2>
          <p>
            اذا كان لديك اي اسئلة حول هذه الشروط يرجي التواصل معنا عن طريق
            البريد الالكتروني او وسائل التواصل المتاحة لك
          </p>
          <p>
            البريد الالكتروني :{" "}
            <a href="mailto:info@thenewnormal.trade">info@thenewnormal.trade</a>
          </p>
        </div>
      </section>
    </>
  );
};

export default LegalAndPrivacy;
