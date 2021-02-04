---
title: 'A Sample Post'
description: 'A post of mock content designed to test the Markdown features supported by Scully and my CSS styles.'
published: true
author: 'Christine Wilks'
date: 2021-01-30
updated: null
categories:
  - Web Development
tags:
  - design
  - sample
image: null

---

# A Sample Post

This is a sample post of mock content designed to test my CSS styles and most of the features of [Markdown](https://www.markdownguide.org/) that [Scully](https://scully.io/) can process and turn into HTML. The great thing about Markdown is that you can also include HTML markup, as in the following figure element and the callout paragraph below.

<figure>
  <img src="/assets/img/io-outoftouch.png">
<figcaption>An image of me performing I/O Out of Touch</figcaption>
</figure>

Here's a plain (real) URL - <https://www.markdownguide.org> - and here's a fake email address - <fake@example.com>.

Automatic URL linking works too - http://www.example.com - which is very convenient.

<p class="callout">This is a callout paragraph and therefore needs to be in a <strong>paragraph with a callout class</strong>. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales suscipit elit imperdiet pellentesque. Maecenas rutrum tempor bibendum. Nulla sit amet urna est.</p>

From here onwards, all the content is **generated from Markdown**. When writing the Markdown samples, I referred to [Markdown Guide basic syntax](https://www.markdownguide.org/basic-syntax/).

## Heading Two

Lorem ipsum **dolor sit amet**, consectetur adipiscing elit. Morbi sodales suscipit elit imperdiet pellentesque. Maecenas rutrum tempor bibendum. Nulla sit amet urna est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed eu lobortis mi. Maecenas aliquet dui augue, sed ullamcorper libero fermentum id. Vestibulum ullamcorper ligula ac elit maximus luctus.

### Heading Three

Phasellus in efficitur nisl. *Donec et varius diam*. Morbi dictum elit nec dui dictum, vitae lobortis erat pulvinar. Sed eu mauris ac augue mollis volutpat non quis eros. Sed justo velit, tempor eget lorem quis, pulvinar elementum dui. Vivamus eu augue sed magna sagittis ultricies quis non orci. Nulla nec venenatis urna. Ut ultricies imperdiet rutrum. Nunc non quam ante.

#### Heading Four

Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris nec laoreet nisl. Sed vel metus nisl. Vestibulum tincidunt tincidunt molestie. Aenean non ipsum sit amet tellus volutpat finibus. Donec quis volutpat sem, sit amet suscipit ligula. Maecenas felis velit, pharetra vitae suscipit molestie, feugiat laoreet dolor. ~~Strike this out!~~

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

*Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales suscipit elit imperdiet pellentesque. Maecenas rutrum tempor bibendum. Nulla sit amet urna est.*

![image from Out of Touch](assets/img/outoftouch.png)

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

The syntax highlighting for fenced codeblocks is provided by the PrismJS utility. Whereas a code snippet looks like this:

`ng generate @scullyio/init:post --name="Post Title"`

I think that's enough to be going on with.
