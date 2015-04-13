using UnityEngine;
using System.Collections;

//Needs to be in Standard Assets for JS to see!

public class Suicide : MonoBehaviour 
{
	public Animator animator;//Animator für Bewegung
	public Animator expAnim;//Sprenganimator
	private float globalTimer;
	private float delay = 2.5f;
	private Vector3 forceDir;
	public bool committedSuicide = false;
	public float impactForce = 8;
	private bool timerStarted = false;
	private bool doItOnce = true;
	public AudioClip explosion;
	
	void FixedUpdate () 
	{
		if(committedSuicide == true)
		{
			if (timerStarted == false)
			{
				globalTimer = Time.time + delay;
				timerStarted = true;
			}

			if (Time.time > globalTimer + 1.5f)
				Destroy(transform.parent.gameObject);
			else if (Time.time > globalTimer)
			{
				CommitSuicide();
				audio.PlayOneShot(explosion, 5.0F);
			}
		}
	}
	
	public void CommitSuicide()
	{
		animator.SetBool("moving",false);
		expAnim.SetBool ("detonate", true);

		if (doItOnce)
		{
			doItOnce = false;
			GameObject deathByExplosion = Instantiate(Resources.Load("ExplosiveDeath", typeof(GameObject))) as GameObject;
			deathByExplosion.transform.parent = this.transform;
			deathByExplosion.transform.position = this.transform.position;
		}
	}

	/*
	void OnTriggerStay(Collider triggeredObjects)
	{
		if (committedSuicide == true && triggeredObjects.collider.name != "Portal") 
		{
			forceDir = ((triggeredObjects.gameObject.transform.position - this.rigidbody.transform.position).normalized);
			triggeredObjects.rigidbody.AddForce (forceDir * impactForce * 100, ForceMode.Force);
		}
	}
	*/
}

