---
title: Test Blog Post
date: 2020-09-27T01:17:24.470Z
description: hey there this is just a test blog post.
---
I'm baby microdosing enamel pin cold-pressed, distillery jean shorts chambray four dollar toast hexagon yuccie photo booth wolf flannel. 

Lomo four loko tacos chia. Chartreuse meh yr taxidermy, cloud bread food truck intelligentsia semiotics health goth stumptown [mustache](https://#) chia microdosing. Lumbersexual **air plant chicharrones chartreuse**, waistcoat yuccie artisan cold-pressed mlkshk photo booth chia leggings. 

## Viral hashtag paleo, heirloom hell of taiyaki kickstarter raclette irony salvia. 

3 wolf moon PBR&B gochujang freegan asymmetrical bicycle rights. Etsy cred normcore vape snackwave fixie humblebrag offal iPhone `fingerstache poke polaroid`. Hella put a bird on it tumeric bicycle rights, four loko kitsch salvia everyday carry migas etsy. 

### Farm-to-table whatever twee taxidermy mixtape.

Small batch pabst synth. Woke microdosing subway tile drinking vinegar jianbing raw denim man braid coloring book readymade synth everyday carry skateboard ethical deep v echo park. 

* Everyday carry freegan ethical, ***coloring [book pok pok](https://#) tilde*** 
* Stumptown `sartorial tumeric meh` fanny pack asymmetrical
* Hoodie snackwave deep v tacos
* *Taxidermy* copper mug hell
* Authentic mixtape quinoa banh mi whatever

Bicycle rights plaid gastropub, intelligentsia twee succulents 3 wolf moon live-edge woke seitan williamsburg put a bird on it `kombucha poke unicorn`. 

```jsonc
resolve: `gatsby-source-filesystem`,
options: {
  path: `${__dirname}/content/blog`,
  name: `blog`,
```

 

Sartorial kitsch cred, dreamcatcher shaman woke mustache butcher tattooed 90's pinterest. 

### Gastropub poke tote bag poutine chillwave pug yuccie normcore.

Pickled kinfolk skateboard, austin pop-up celiac ennui franzen yr VHS live-edge chia messenger bag. Food truck brunch put a bird on it man braid kickstarter, kombucha keffiyeh stumptown. 

> Succulents fingerstache street art enamel pin squid microdosing. Lo-fi etsy hexagon put a bird on it. Everyday carry freegan ethical, coloring book pok pok tilde stumptown sartorial tumeric meh fanny pack asymmetrical. 

## Hoodie snackwave deep v tacos. 

Taxidermy copper mug hell of, authentic mixtape quinoa banh mi whatever.

Portland beard hell of pork belly chia viral art party, next level pabst man bun church-key taiyaki activated charcoal cloud bread. 

1. Everyday carry freegan ethical, ***coloring [book pok pok](https://#) tilde*** 
2. Stumptown `sartorial tumeric meh` fanny pack asymmetrical
3. Hoodie snackwave deep v tacos
4. *Taxidermy* copper mug hell
5. Authentic mixtape quinoa banh mi whatever

Kinfolk paleo meggings literally next level distillery. Normcore flannel taiyaki lumbersexual synth pickled bespoke thundercats iceland raw denim activated charcoal 3 wolf moon offal four dollar toast small batch. 

```jsx
<header>
  <h2>
    <Link to={post.fields.slug} itemProp="url">
      <span itemProp="headline">{title}</span>
    </Link>
  </h2>
  <small>{post.frontmatter.date}</small>
</header>
```

Bitters banjo leggings ennui iPhone, PBR&B blog shabby chic. Tattooed taiyaki prism semiotics portland cloud bread letterpress pitchfork green juice.

## Meh hexagon church-key, craft beer kinfolk fam artisan williamsburg offal 90's. 

Narwhal waistcoat bespoke before they sold out, tousled messenger bag chia VHS marfa kinfolk art party intelligentsia hell of forage kombucha. 

```python
@login_required
def new_blogpost(request):
    """Add a new blog post"""
    if request.method != 'POST':
        # No data submitted; create a blank form
        form = BlogForm()
    else:
        # POST data submitted; process data
        form = BlogForm(data=request.POST)
        if form.is_valid():
            new_blogpost = form.save(commit=False)
            new_blogpost.owner = request.user
            new_blogpost.save()
            return redirect('blog:blog')
```

Kale chips seitan drinking vinegar bitters typewriter tbh, polaroid tumblr pabst keffiyeh. Chartreuse woke truffaut, irony tousled forage disrupt green juice edison bulb raclette chillwave sustainable jean shorts gentrify af. 

Four loko 8-bit hella sartorial kale chips activated charcoal you probably haven't heard of them coloring book literally. Chicharrones copper mug farm-to-table migas sartorial unicorn kitsch iceland semiotics authentic.