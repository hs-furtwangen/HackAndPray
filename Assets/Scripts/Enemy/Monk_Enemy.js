#pragma strict

var target : GameObject;
var speed : float;
var rb : Rigidbody;
var scream : AudioClip;

function Start()
{
	speed  = 4.0f;
	target = gameObject.Find("Character_Controller/Character");
	rb = GetComponent.<Rigidbody>();
}

	function FixedUpdate () 
	{
		var moveX : float = 0;
		var moveY : float = 0;
		
		if (this.transform.position.x < target.transform.position.x)
			moveX = 1f*speed;
		else if(this.transform.position.x > target.transform.position.x)
			moveX = -1f*speed;
			
		if (this.transform.position.y < target.transform.position.y)
			moveY = 1f*speed;
		else if(this.transform.position.y > target.transform.position.y)
			moveY = -1f*speed; 
		
		if (Vector3.Distance(this.transform.position, target.transform.position) > 3.0f)
			rb.velocity = Vector2(moveX, moveY);
		else
		{
			//Attack
			audio.PlayOneShot(scream, 8.0f);
			
			//Insert attack
		}
	}
	
	function OnCollisionEnter(collision : Collision) 
	{
		if(collision.collider.name == "SwordSprite")
		{
			GlobalStuff.SetKillCount();
			var blood : GameObject = Resources.Load("BloodFountain") as GameObject;
			Instantiate (blood, this.transform.position + Vector3(0, 0, -10.0f), Quaternion.identity);
			Destroy (transform.root.gameObject);
		}
	}
	
