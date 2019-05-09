(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{332:function(s,t,a){"use strict";a.r(t);var n=a(3),e=Object(n.a)({},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"java锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java锁","aria-hidden":"true"}},[s._v("#")]),s._v(" Java锁")]),s._v(" "),a("h1",{attrs:{id:"synchronized"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#synchronized","aria-hidden":"true"}},[s._v("#")]),s._v(" synchronized")]),s._v(" "),a("h4",{attrs:{id:"synchronized-this-以及非static的synchronized方法，只能防止多个线程同时执行同一个对象的同步代码段。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#synchronized-this-以及非static的synchronized方法，只能防止多个线程同时执行同一个对象的同步代码段。","aria-hidden":"true"}},[s._v("#")]),s._v(" synchronized(this)以及非static的synchronized方法，只能防止多个线程同时执行同一个对象的同步代码段。")]),s._v(" "),a("h4",{attrs:{id:"synchronized锁住的是代码还是对象？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#synchronized锁住的是代码还是对象？","aria-hidden":"true"}},[s._v("#")]),s._v(" synchronized锁住的是代码还是对象？")]),s._v(" "),a("h5",{attrs:{id:"答案是：synchronized锁住的是括号里的对象，而不是代码。对于非static的synchronized方法，锁的就是对象本身也就是this。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#答案是：synchronized锁住的是括号里的对象，而不是代码。对于非static的synchronized方法，锁的就是对象本身也就是this。","aria-hidden":"true"}},[s._v("#")]),s._v(" 答案是：synchronized锁住的是括号里的对象，而不是代码。对于非static的synchronized方法，锁的就是对象本身也就是this。")]),s._v(" "),a("h4",{attrs:{id:"当synchronized锁住一个对象后，别的线程如果也想拿到这个对象的锁，就必须等待这个线程执行完成释放锁，才能再次给对象加锁，这样才达到线程同步的目的。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#当synchronized锁住一个对象后，别的线程如果也想拿到这个对象的锁，就必须等待这个线程执行完成释放锁，才能再次给对象加锁，这样才达到线程同步的目的。","aria-hidden":"true"}},[s._v("#")]),s._v(" 当synchronized锁住一个对象后，别的线程如果也想拿到这个对象的锁，就必须等待这个线程执行完成释放锁，才能再次给对象加锁，这样才达到线程同步的目的。")]),s._v(" "),a("h4",{attrs:{id:"即使两个不同的代码段，都要锁同一个对象，那么这两个代码段也不能在多线程环境下同时运行。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#即使两个不同的代码段，都要锁同一个对象，那么这两个代码段也不能在多线程环境下同时运行。","aria-hidden":"true"}},[s._v("#")]),s._v(" 即使两个不同的代码段，都要锁同一个对象，那么这两个代码段也不能在多线程环境下同时运行。")]),s._v(" "),a("h4",{attrs:{id:"所以我们在用synchronized关键字的时候，尽量缩小代码段的范围，尽量不要在整个方法上加同步。这叫减小锁的粒度，使代码更大程度的并发。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#所以我们在用synchronized关键字的时候，尽量缩小代码段的范围，尽量不要在整个方法上加同步。这叫减小锁的粒度，使代码更大程度的并发。","aria-hidden":"true"}},[s._v("#")]),s._v(" 所以我们在用synchronized关键字的时候，尽量缩小代码段的范围，尽量不要在整个方法上加同步。这叫减小锁的粒度，使代码更大程度的并发。")]),s._v(" "),a("h4",{attrs:{id:"static方法可以直接类名加方法名调用，方法中无法使用this，所以它锁的不是this，而是类的class对象，所以static-synchronized方法也相当于全局锁，相当于锁住了代码段。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#static方法可以直接类名加方法名调用，方法中无法使用this，所以它锁的不是this，而是类的class对象，所以static-synchronized方法也相当于全局锁，相当于锁住了代码段。","aria-hidden":"true"}},[s._v("#")]),s._v(" static方法可以直接类名加方法名调用，方法中无法使用this，所以它锁的不是this，而是类的Class对象，所以static synchronized方法也相当于全局锁，相当于锁住了代码段。")]),s._v(" "),a("p",[a("img",{attrs:{src:"/images/synchronized%E4%BD%BF%E7%94%A8%E6%96%B9%E5%BC%8F.png",alt:""}})]),s._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SynchronizedDemo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 这是静态的锁,因为静态就带有this的含义,所以不能用this,而用类.class")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("synchronized")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SynchronizedDemo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 业务逻辑......")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 测试过，在quartz中两个任务同时执行时无效！")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SynchronizedDemo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("synchronized")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 业务逻辑......")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h2",{attrs:{id:"将任意对象作为对象监视器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#将任意对象作为对象监视器","aria-hidden":"true"}},[s._v("#")]),s._v(" 将任意对象作为对象监视器")]),s._v(" "),a("h4",{attrs:{id:"多个线程持有对象监视器作为同一个对象的前提下，同一时间只有一个线程可以执行synchronized-任意自定义对象-同步代码快。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多个线程持有对象监视器作为同一个对象的前提下，同一时间只有一个线程可以执行synchronized-任意自定义对象-同步代码快。","aria-hidden":"true"}},[s._v("#")]),s._v(" 多个线程持有对象监视器作为同一个对象的前提下，同一时间只有一个线程可以执行synchronized(任意自定义对象)同步代码快。")]),s._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SynchronizedDemo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("synchronized")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 业务逻辑......")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SynchronizedDemo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// lock放在方法外部会使整个方法同步")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// String lock = "";')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// lock放在方法内部使同步代码块同步")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" lock "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("synchronized")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("lock"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 业务逻辑......")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])])},[],!1,null,null,null);t.default=e.exports}}]);