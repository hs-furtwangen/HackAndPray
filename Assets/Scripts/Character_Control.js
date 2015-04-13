#pragma strict

var speed : float;
var rb: Rigidbody;
var animatorWalk : Animator;
var up : Quaternion;
var down : Quaternion;
var left : Quaternion;
var right : Quaternion;
var swordCollider : BoxCollider;
var swordSlash : Transform;
var swordSlashRenderer : GameObject;
var swordSound1 : AudioClip;
var swordSound2 : AudioClip;
var swordSound3 : AudioClip;

function Start () 
{
	speed  = 12.0;
	rb = GetComponent.<Rigidbody>();
	animatorWalk = gameObject.Find("BodySprite").GetComponent.<Animator>();
	up = Quaternion.Euler(0, 0, 0);
    down = Quaternion.Euler(180, 180, 0);
    left = Quaternion.Euler(0, 0, 270);
    right = Quaternion.Euler(180, 180, 270);
    swordCollider = gameObject.Find("SwordSprite").GetComponent.<BoxCollider>();
    swordSlash = transform.Find("SwordController");
    swordSlashRenderer = gameObject.Find("SwordController/SwordSprite");
    swordSlashRenderer.GetComponent(SpriteRenderer).enabled = false; 
}

	function FixedUpdate () 
	{
		if(GlobalStuff.HP <=0)
			Application.LoadLevel("GameOver");
	
		//Move
		var verticalSpeed : float = speed * Input.GetAxis ("VerticalARROWS");
		var horizontalSpeed : float = speed * Input.GetAxis ("HorizontalARROWS");
		
		rb.velocity = Vector2(horizontalSpeed, -verticalSpeed);
		
		//Attack
		if (Input.GetKey (KeyCode.Space))
		{
			swordSlashRenderer.GetComponent(SpriteRenderer).enabled = true; 
			swordSlash.animation.Play("SwordSlash");
			
			var randomNumber = Random.Range (0,3);
			
			if(randomNumber == 0)
				audio.PlayOneShot(swordSound1, 1.5);
			else if(randomNumber == 1)
				audio.PlayOneShot(swordSound2, 1.5);
			else if(randomNumber == 2)
				audio.PlayOneShot(swordSound3, 2.5);
		}
			
		if (swordSlash.animation["SwordSlash"].enabled == true)
    		swordCollider.enabled = true;
		else
			swordCollider.enabled = false;
		
		//Animation - Walk
		if(Input.GetKey (KeyCode.UpArrow))
		{
			//Animation walk_up
			this.transform.rotation = down;
		}
		else if(Input.GetKey (KeyCode.DownArrow))
		{
			//Animation walk_down
			this.transform.rotation = up;
		}
		else if(Input.GetKey (KeyCode.LeftArrow))
		{
			//Animation walk_left
			this.transform.rotation = left;
		}
		else if(Input.GetKey (KeyCode.RightArrow))
		{
			//Animation walk_right
			this.transform.rotation = right;
		}
		else
		{
			//Idle
			animatorWalk.SetBool("move",false);
		}	
		
		
		//Animation - Direction
		if(Input.GetKey (KeyCode.W))
		{
			//Animation walk_up
			animatorWalk.SetBool ("move",true);
		}
		else if(Input.GetKey (KeyCode.S))
		{
			//Animation walk_down
			animatorWalk.SetBool ("move",true);
		}
		else if(Input.GetKey (KeyCode.A))
		{
			//Animation walk_left
			animatorWalk.SetBool ("move",true);
		}
		else if(Input.GetKey (KeyCode.D))
		{
			//Animation walk_right
			animatorWalk.SetBool ("move",true);
		}
	}
	
	