#pragma strict

 var lifetime = 3.0;
 
     function Awake()
     {
         Destroy(this.gameObject, lifetime);
     }