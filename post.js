router.post('/test', (req,res) => {
    //Yüklenen resmi istediğin klasöre bu fonksiyon ile taşıyabilirsin
    let post_image = req.files.post_image
    let logo_image = req.files.logo_image
    let reklam_resmi = req.files.reklam_resmi

    post_image.mv(path.resolve(__dirname, '../public/img' , post_image.name))
    logo_image.mv(path.resolve(__dirname, '../public/img' , logo_image.name))
    reklam_resmi.mv(path.resolve(__dirname, '../public/img' , reklam_resmi.name))

    Post.create({
        ...req.body,
        post_image:`/img/${post_image.name}`,
        logo_image:`/img/${logo_image.name}`,
        reklam_resmi:`/img/${reklam_resmi.name}`
    })

    res.redirect('/')

})
