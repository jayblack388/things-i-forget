---
date: "2018-10-21"
title: "Git Profiles"
tags: ["git", "macos"]
excerpt: "A quick guide to setting up 2 git profiles and swapping between them"
---

<h5>I have been using one machine to push code to two different GitHub accounts with different usernames. Assuming you have already set up one account and want to add a new one:</h5>
<pre>
Generate a new SSH key <code>ssh-keygen -t rsa -C "account2@example.com"</code>
Save it, but remember not to override the existing one <code>id_rsa</code>. Give it a different name, e.g. <code>id_rsa_another</code>
Copy the contents of the key to your GitHub account:
Settings -> SSH and GPG keys -> New SSH key -> Give a label and paste the key -> Add SSH key
Add the key to the ssh agent: <code>ssh-add ~/.ssh/id_rsa_another</code>
</pre>
<h5>Setup a GitHub host: Create a config file with <code>touch ~/.ssh/config</code> and edit the file by providing configurations to your accounts:</h5>
<pre>
  <code>#first account</code>
    <code>Host github.com-main</code>
    <code>HostName github.com</code>
    <code>User git</code>
    <code>IdentityFile ~/.ssh/id_rsa</code>
  <code>#another account</code>
    <code>Host github.com-another</code>
    <code>HostName github.com</code>
    <code>User git</code>
    <code>IdentityFile ~/.ssh/id_rsa_another</code>
</pre>
<pre>
Now you should be able to push from different accounts depending on what key you add to the ssh agent:
i.e. to use your first account, do <code>ssh-add ~/.ssh/id_rsa</code>.
You can add these commands to your bash_profile to make switching easier:
  <code>alias clearprofiles='ssh-add -D'</code>
  <code>alias account2='ssh-add ~/.ssh/id_rsa_personal'</code>
  <code>alias account1='ssh-add ~/.ssh/id_rsa'</code>
</pre>
