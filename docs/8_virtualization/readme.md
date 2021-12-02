Virtualization
==============

With a focus on having a modular development environment.
Here, we'll call a Virtual machine a VM, because it's a big savings
in how much I have to type.

By the end of this module, students will be able to...

* know what a virtual machine is
* understand how to download a disk image, how to mount it
* be able to to install an OS on a virtual machine
* know how to interact with the VM over the network
* know how to share a host folder with the VM
* know how to use checkpointing in a VM
* know how docker works, and how it is just a VM
* understand that we can build environments with Vagrant or similar

Installing and running a VM:

<iframe
width="560"
height="315"
src="https://www.youtube.com/embed/gEjvwp9a_Co"
title="YouTube video player"
frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowfullscreen></iframe>

This just sounds like a buzzword
--------------------------------

Yeah. But I promise you it's not. And, I couldn't really call it anything else
other than "a computer running on your computer" -- and that just doesn't have
the same vibe.

But, that's what it is. On the outset, it sounds like *a big hassle*.
**Why would I want a less powerful computer on my real computer?**
Well, that's actually a compelling question. The answer is
(in my opinion): Sandboxing.

Sandboxing
----------

If you're in CS and don't like a good metaphor, I'm not sure I can help you.
Also, you're going to be mad... *a lot*.

Yes. The metaphor is a sandbox - the kind you played with as a kid. What we're
*really* trying to say:

* Everything is temporary.
* We're allowed to break things.
* We can rebuild, or build differently.
* My sandbox playing over here in my sandbox doesn't affect your playing in
  your sandbox.
* We're playing. This isn't the real world.
* I can make my sandbox look like your sandbox (and then break my sandbox).

This seems really violent. I promise you it's not.

Why not just on my machine
--------------------------

Solution-space. This falls under "My sandbox playing over here in my sandbox
doesn't affect your playing in your sandbox"... but both the sandboxes are
the yours... but for different projects.

Simple thought experiment. For project 1, you install software packages
A, B, and C. Project 2 you don't install *anything*... but it doesn't
compile for anyone else. You have a dependency on packages B... but don't
even know it.

![Works for me, via [Grape Up on Medium](https://medium.com/grapeup/the-love-hate-relationship-between-testers-and-developers-e2cafa01d460)](./images/works_for_me.png)

We didn't maintain our "solution space". There's other ways this is violated,
such as reusing a database for 2 different projects (for the love... please
at least use different schemas!), running 2 projects on the same server, or,
reusing a development environment for 2 different projects.

So how does Virtualization Help?
--------------------------------

If you're sloppy, it doesn't. A huge anti-pattern is to just re-use the same
development VM you have for multiple projects. You've just *moved* the problem,
congratulations.

VMs, especially with Linux, are free. We have an abundance of hard drive space
at our disposal. Just... create a new VM for each project!

### VM best practice

Have 1 VM for 1 project. These can stem from the same fairly bare-bones install
of whatever Operating System you're using for the project.

It should be as *close* to the production/deployment/real environment as
possible. This way, we're the least likely to have "works for me" issues
that stem from versions of operating systems, versions of the libraries, or
other strange dependency things.

In fact... that's kind of how Docker was created. To wit:

![Docker](./images/docker.jpg)

Docker images are built from a script, so the developers have as similar
as possible an environment to production/deployment. More on this with
the "building VMs" part!

How do we do it?
----------------

The mental model is:

```txt
 ┌──────────────────────────────────┐
 │Host machine                      │
 │(your computer)                   │
 │  ┌────────────────────────────┐  │
 │  │Virtualization              │  │
 │  │Software                    │  │
 │  │ ┌────────┬────────┬───────┐│  │
 │  │ │        │        │       ││  │
 │  │ │  VM 1  │  VM 2  │  ...  ││  │
 │  │ │        │        │       ││  │
 │  │ └────────┴────────┴───────┘│  │
 │  │                            │  │
 │  └────────────────────────────┘  │
 └──────────────────────────────────┘
```

You run a program that is your favourite (or mandated) virtual machine
software. Sometimes called a "Hypervisor"... which is like calling a computer
a CPU... that's just part of it. Kernels (the part of your operating system
that manages processes and stuff) are sometimes called "supervisors". So,
Virtualization software manages supervisors... so
[hypervisor](https://www.ibm.com/cloud/learn/hypervisors)? Sure. Why not.

tl;dr: It's a program that runs operating systems.

Popular ones VM solutions:

* [VMWare](https://www.vmware.com/), paid and very popular
* [Oracle VirtualBox](https://www.virtualbox.org/), free, GPL'd, but owned
  by Oracle.
* [QEMU](https://www.qemu.org/), open source virtualization

And, some operating systems provide "jails", which are LightWeight VMs.
Still sandboxed, but share some kernel tasks with the host system.
[FreeBSD jails](https://docs.freebsd.org/en/books/handbook/jails/)
are a shining example of this. But investigate
`chroot`-ed environments for more. (Advanced, and awesome).

Running it
-----------

This is obvious, if you've thought about it: the first thing you need to do
to create a new VM... is install the operating system! So, you'll need the
install media. Usually, this is a disk image, usually suffixed with `iso`.

Generally: Create a new VM, and you will be asked to provide the `iso` that
you fetched. You'll be prompted for how much disk space you'd like,
and how much memory you'd like to provide.

The disk space is "flexible", generally - only taking up a little more space
than the *contents* of the virtual disk drive. The memory allocated is
generally occupied the whole time the VM is alive. The host OS can
do paging, since the VM is just a process... so it may not be *resident*
in memory the whole time.

Networking
----------

Depending on your virtualization software, the default network will be
different, but all carry the same terminology.

### NAT-ed

NAT is 'network address translation', this is how your home router works.

```txt
                 ┌────────────────┬──────┐
                 │                │      │
 ┌───────────────┤ Private network│ VM 1 │
 │               │                │      │
 │ Your computer │                ├──────┘
 │               │                │
 └───────────────┤                ├──────┐
                 │                │      │
                 │                │ VM 2 │
                 │                │      │
                 │                ├──────┘
                 │                │
                 │                ├──────┐
                 │                │      │
                 │                │ ...  │
                 │                │      │
                 └────────────────┴──────┘
```

Your VMs can access the internet through your computer, but you'd have to set
up port-forwarding if you wanted external requests to reach your VMs.

### Bridged

This causes your VM to "bridge" over your host machine, and then will
get an IP address *directly* from your router.

```txt
     ┌────────────────────────────────┐
     │                                │
     │           ┌─────────────────┐  │
     │           │                 ├──┴───┐
┌────┴─────┐     │                 │      │
│Router/   ├─────┤  Your computer  │ VM   │
│internet  │     │                 │      │
└──────────┘     │                 ├──────┘
                 └─────────────────┘
```

You could set up port-forwarding on your router to go directly to
your VM. So, as far as your network knows, the VM is "just a machine
on the network".

Then... it's a computer
-----------------------

And... it computes things!

You can use it interactively, or use [remote](../2_shell/remote.md) into the
VM and use it that way.

Shared folders
--------------

Most (all?) VMs can share a folder with the host. The implementation
of this varies between products, though most offer it as a network-shared
folder.

This is **AWESOME**. It's a great way to work on files **locally**, then
share and run (or compile, or render, or whatever you need to do)
the code in the VM.

Checkpointing
-------------

If you've ever played a video game, or... edited a copy of a file because
you're terrified of the changes you're about to make.

Well. It's that. It's a point in time that you can revert to.

Recreating VMs
--------------

Recreating a development environment is *hard*. Sending your VM to a
co-worker is an anti-pattern. What you should be doing is tracking your
dependencies, and having an **automated** way of installing them all is
**excellent**.

### How

Use a tool! Automated construction of your VMs. Why:

* Compliance! You can configure your VM's disks to be encrypted, install
  keys, install and configure firewalls, set default passwords, or whatever
  has to be done to harden the system.
* Install well-known dependencies. This makes sure your development VMs have
  the same software packages and operating system... down to the exact
  versions!
* We can ramp up our deployments *easily*. We can deploy machines using the
  _same script_ as we use for development, or for production machines, testing
  machines - whatever you need!

And.... it causes to to not waste our time building our VMs if we want a new
VM! New employees can get up-and-running quickly!

How:

* [Vagrant](https://www.vagrantup.com/). Open source, with paid training.
  Other, paid, tools use this Open Source one.
* [Puppet](https://puppet.com/). Open source with paid value-add
  services.
* [Salt Stack](https://saltproject.io/). Open source. Has some
  tools you can pay for to run on their hardware.
* [Ansible](https://www.ansible.com/). Open source tool, 'owned' by
  Red Hat.
* [Terraform](https://www.terraform.io/). Free to use tool, with paid tools
  that improve the experience, adding new features.
* [Capistrano](https://capistranorb.com/). Open source tool, uses `ssh` to
  control remote machines.

Some of these are interconnected. Such as Vagrant, which can call chef or
puppet scripts.

Activities
----------

* Provide a virtual machine with some special code.
  UMLearn course to put in the super secret word/file
