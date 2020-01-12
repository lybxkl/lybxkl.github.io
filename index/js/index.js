var baseUrl = {
    //搜索病症页面
    entering: {
        //输入电话号码查询患者
        searchuser: 'doctor_ajax.php?do=searchuser',
        //点击下一步
        prescribe: 'doctor_ajax.php?do=prescribe',
    },
    // 添加药品页面
    adddrugs: {
        //存为经验方确定
        saveexp: 'http://ww.lehuo100.com/doctor_ajax.php?do=saveexp',
        // 本地查询的药材,点击药材时查询后台当前区域有没有货
        searchsudrug: 'http://ww.lehuo100.com/doctor_ajax.php?do=searchsudrug',
        //提交
        recipedetail: 'http://ww.lehuo100.com/doctor_ajax.php?do=recipedetail',
        // 点击导入经验方时
        explist: 'http://ww.lehuo100.com/doctor_ajax.php?do=explist',
        // 点击导入
        exportsexp: 'http://ww.lehuo100.com/doctor_ajax.php?do=exportsexp',
        // 存方
        getexpclassify: 'http://ww.lehuo100.com/doctor_ajax.php?do=getexpclassify'
    },
    // 拍方上传
    upload: {
        // 上传图片
        doctorimgup: 'http://w.htyy.com/doctor_ajax.php?do=doctorimgup',
        // 提交
        recipedetail: 'http://ww.lehuo100.com/doctor_ajax.php?do=recipedetail',
    }
}