#pragma strict

var target : GameObject;
var speed : float;
var rb : Rigidbody;
var Suicide_Script : Suicide;//C# script
var moveAllowed : boolean;
var killedAlready : boolean;//To avoid double killCount
var scream : AudioClip;

function Start()
{
	speed  = 4.0f;
	target = gameObject.Find("Character_Controller/Character");
	rb = GetComponent.<Rigidbody>();
	Suicide_Script = GetComponent(Suicide);
	moveAllowed = true;
	killedAlready = false;
}

	function FixedUpdate () 
	{
		var moveX : float = 0;
		var moveY : float = 0;
		
		if(moveAllowed == true)
		{
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
				moveAllowed = false;
				rb.velocity = Vector2(0, 0);
				renderer.material.color = Color.red;
				killedAlready = true;
				Suicide_Script.committedSuicide = true;	
				GlobalStuff.SetKillCount();	
			}
		}
	}
	
	function OnCollisionEnter(collision : Collision) 
	{
		if(collision.collider.name == "SwordSprite" && killedAlready == false)
		{
			GlobalStuff.SetKillCount();
			var blood : GameObject = Resources.Load("BloodFountain") as GameObject;
			Instantiate (blood, this.transform.position + Vector3(0, 0, -10.0f), Quaternion.identity);
			Destroy (transform.root.gameObject);
		}
	}
	
