---
title: My First Test Post in Scully
description: Testing all the different elements and Markdown features that I will likely use so that I can style them with CSS.
published: true
author: Christine Wilks
date: 2021-01-30
updated:
categories:
  - Web Development
tags:
   - Scully
   - Angular
image:

---

# My First Test Post in Scully H1

This is the first blog post I've generated myself in Scully. It's merely a test post. The main purpose of its content is to provide (almost) all the elements and features in Markdown so that I can style the generated HTML with CSS.

<figure>
  <img src="/assets/img/underbelly.png">
<figcaption>This is an image from Underbelly</figcaption>
</figure>

Note: I generate this post by running the the following command:

`ng generate @scullyio/init:post --name="My First Test Post in Scully"`

Let's see what happens next when I run *scully & serve*...

When writing the Markdown samples, I referred to [Markdown Guide basic syntax](https://www.markdownguide.org/basic-syntax/)

<p class="callout">This is a callout paragraph and therefore needs to be in a <strong>paragraph with callout class</strong>. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales suscipit elit imperdiet pellentesque. Maecenas rutrum tempor bibendum. Nulla sit amet urna est.</p>

## Heading Two

Lorem ipsum **dolor sit amet**, consectetur adipiscing elit. Morbi sodales suscipit elit imperdiet pellentesque. Maecenas rutrum tempor bibendum. Nulla sit amet urna est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed eu lobortis mi. Maecenas aliquet dui augue, sed ullamcorper libero fermentum id. Vestibulum ullamcorper ligula ac elit maximus luctus. Nulla turpis odio, maximus eget rhoncus in, congue quis tortor. Quisque id fermentum sapien. Cras venenatis accumsan quam vulputate suscipit. Nullam gravida augue id nunc porttitor commodo. Nullam ultrices est ac erat bibendum, non mollis odio cursus. Nulla tellus enim, iaculis sed faucibus vel, tristique ac mauris. In gravida leo quis pretium fringilla.

### Heading Three

Phasellus in efficitur nisl. Donec et varius diam. Morbi dictum elit nec dui dictum, vitae lobortis erat pulvinar. Sed eu mauris ac augue mollis volutpat non quis eros. Sed justo velit, tempor eget lorem quis, pulvinar elementum dui. Vivamus eu augue sed magna sagittis ultricies quis non orci. Nulla nec venenatis urna. Ut ultricies imperdiet rutrum. Nunc non quam ante. Fusce eleifend neque sapien, luctus convallis lorem viverra id. Nulla pulvinar hendrerit hendrerit. Nam rhoncus sapien et nibh sodales ultricies. Donec elementum nibh augue, et congue ex feugiat et. Donec sollicitudin nunc id ante ullamcorper, eleifend auctor libero maximus. Nullam feugiat felis sed consequat pellentesque. Nam id gravida massa.

#### Heading Four

Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris nec laoreet nisl. Sed vel metus nisl. Vestibulum tincidunt tincidunt molestie. Aenean non ipsum sit amet tellus volutpat finibus. Donec quis volutpat sem, sit amet suscipit ligula. Maecenas felis velit, pharetra vitae suscipit molestie, feugiat laoreet dolor. Integer placerat, enim ac aliquam posuere, urna est gravida dui, at mollis dolor ante a quam. Sed odio risus, elementum nec fringilla ac, euismod pretium lorem. Cras vitae orci nec tellus maximus porta nec ut ante. Sed pretium congue magna quis consectetur.

## Lists

- item 1
- item 2
- item 3

1. one apple
2. two pears
3. three oranges

## Blockquotes

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales suscipit elit imperdiet pellentesque. Maecenas rutrum tempor bibendum. Nulla sit amet urna est.

> Integer in nisi tristique, ullamcorper lectus vel, suscipit sem. Fusce porta leo nunc, feugiat mollis sem aliquam ac. Aenean libero magna, efficitur et mattis et, elementum nec tellus. Sed sit amet lorem et felis congue rutrum. Donec porttitor metus vitae ligula sagittis consectetur. Maecenas et gravida quam. Morbi tincidunt at risus vitae feugiat.

More blockquotes follow on from here.

> Dorothy followed her through many of the beautiful rooms in her castle.
>
> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.

Lorem ipsum dolor sit **amet**, consectetur adipiscing elit. Morbi sodales suscipit elit imperdiet pellentesque. Maecenas rutrum tempor bibendum. Nulla sit amet urna est.

![image from I/O OOT](assets/img/io-outoftouch.png)

## URLS & Email addresses

<https://www.markdownguide.org>
<br>
<fake@example.com>

Does automatic URL linking work? http://www.example.com Yes!

<h2>A heading 2 in HTML tags</h2>

<p>It's always possible to insert some actual HTML markup, like this paragraph, inside a Markdown document.</p>

## Tables

Tables are part of Markdown's [Extended Syntax](https://www.markdownguide.org/extended-syntax/).

| Syntax      | Description |
| ----------- | ----------- |
| Header      | Title       |
| Paragraph   | Text        |

## Fenced Code Blocks

```js
{
  firstName: "Jane",
  lastName: "Smith",
  age: 25
}
```

I think that's enough to be going on with.
