
<div dir="rtl" align="right" >

## GETTING GIT ON A SERVER

</br>

سنتكلم الان عن اعداد خدمة git على server خاص بك. مبدئيا عليك القيام بتصدير repository الموجود لديك الى bare repository اخر جديد وهي عملية بسيطه يمكنك تنفيذها باستخدام امر `clone` مع الخيار (bare - - ) حيث يكون امتداد repository الجديد git. 
</br>
مثال 

<div dir="ltr" align="left">

```
% git clone --bare gitcommand gitcommand.git
Cloning into bare repository 'gitcommand.git'...
done.

```
</div>
</br>
هذا الامر يقوم باخد ملف git repository   لوحده بدون working directory  ويقوم بوضعه في repository جديد 

</br></br>

## Putting the Bare Repository on a Server
</br>

الان بعد ان اصبح لديك نسخة bare repository كل ماعليك هو وضعها على server الخاص بك واعداد البروتوكولاتك .

</br>
مثال لنفترض الان انك قمت باعداد server يسمى git.example.com ويمكنك الدخول اليه باستخدام SSH،وتريد تخزين git repositories داخل  project/git  المخزن داخل server 
<div dir="ltr" align="left">

```
% scp -r gitcommand.git user@git.example.com:/project/git
```
</div>

</br>
الان المستخدمين الذين يملكون وصول قراءه ssh-based على project/git  يسمح لهم  باستخدام امر `clone`على repository وفقط المستخدمين الذين لديهم وصول كتابه يمكنهم استخدام امر push لاضافة تعديلاتهم .
<div dir="ltr" align="left">

```
% git clone user@git.example.com:/project/git/gitcommand.git 
```
</div>
</br>

</div>
