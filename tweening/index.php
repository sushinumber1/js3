<?php
    include ('../local/header.php'); 
?>
        <div id='content'>
            <div id="header">
                <h1>Tweening</h1>
                <p>Tweening in JS3 is based on the familiar syntax of the popular <a href='http://www.greensock.com/tweenlite/'>Tweenlite ActionScript library.</a><hr>
				There are two ways to animate in JS3.<br>You can use <a class='anchor' href='#basic-tweening'>Tweens</a> to move individual objects or group objects together inside functions called <a class='anchor' href='#animating-runners'>Runners</a>.</p>
                <hr>
            </div>

  <!-- basic-tweening -->                    
                <div id="basic-tweening">
                    <h2>Basic Tweening</h2>                
                <p>The simplest way to Tween an Object is by using the built in Tween method. The <a href=<?php linkto('/api/#api-tweening')?>>syntax</a> is exactly the same as Tweenlite.</p>
                <pre><code class='javascript'>
        var c = new JS3Circle();                     
        c.x = 75; 
        c.y = 25;                          
        stage.tween(c, 3, {x:800, alpha:0});
                </code></pre>
                <canvas id="x3" width='898' height='100'></canvas>  
                <button id='x3-btn' class='btn btn-primary'>Tween Me</button>
                </div>
                <div class="clearfix"><hr></div>
                
        <!-- chaining-tweens -->                    
                <div>
                    <h2>Chaining Tweens</h2>                
                <p>You can also chain tweens together by specifying a callback to fire when the animation completes.</p>
                <pre><code class='javascript'> 
        var c = new JS3Circle();	                     
        stage.tween(c, 3, {x:800, onComplete:function(){
            stage.tween(c, 1, {alpha:0});
        }});
                </code></pre>
                <canvas id="x4" width='898' height='100'></canvas>  
                <button id='x4-btn' class='btn btn-primary'>Tween Me</button>
                </div>
                <div class="clearfix"><hr></div>  

				<h2>Tween Syntax</h2>
                <p>For a full list of the properties and callbacks you can pass to the Tween function, visit the <a href=<?php linkto('/api#api-tweening')?>>API section.</a></p><hr>

        <!-- timed-frames -->                    
                <div id="animating-runners">
                    <h2>Animating with Runners</h2>
                <p>A second and more powerful way to animate is by using Runners which are just functions that execute on a timed delay.<br>
                    Simply pass a function to the stage <strong><u>run</u></strong> method and specify how often to call it in seconds.<br>
                    The snippet below draws a circle and moves it ten pixels to the right every time 1/4 of a second.</p>
                <pre><code>                        
        var c = new JS3Circle();           
    	function update()
        {
	        c.x += 10;
	        if (c.x >= 800) c.x = 75;
        }
        stage.addChild( c );
        stage.run(update, .25);
                </code></pre>
                <canvas id="x5" width='898' height='100'></canvas>  
                <button id='x5-btn' class='btn btn-primary'>Start Updating</button>
                <div class="clearfix"><hr></div> 
                <p>You can also specify how many times to call the function you passed to the <strong><u>run</u></strong> method.<br>
The snippet below moves the circle fifty pixels to the right every time 1/2 second. It does this 5 times and then stops.</p>
                <pre><code>                        
        var c = new JS3Circle();
            c.size = 75; c.fillColor = "#ddd"; c.strokeColor = "#ccc"; c.strokeWidth = 2;
        stage.addChild( c );               
    	function update()
        {
	        c.x +=50;
        }
        stage.run(update, .5, 5);
                </code></pre>
                <canvas id="x6" width='898' height='100'></canvas>  
                <button id='x6-btn' class='btn btn-primary'>Start Updating</button>
                </div>
                <div class="clearfix"><hr></div> 
        <p>Optionally you can also pass a fourth argument to <strong><u>run</u></strong> specifying a callback to execute when all calls to run's update function have completed.<br>
The following snippet calls the update function every 1/2 second, fives times and then executes the callback "onUpdateComplete".   
            </p>
                <pre><code>
    	function update()
        {
	        c.x +=50;
        }
        function onUpdateComplete()
        {
            console.log('done!');
        }
        stage.run(update, .5, 5, onUpdateComplete);        
                </code></pre>                
<p><strong>Quick Tip :</strong> Calling <strong><u>run</u></strong> with just an update function and no other arguments will execute "update" on every frame tick, similar to the AS3 <a href='http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/flash/events/Event.html#ENTER_FRAME' target='blank'>OnEnterFrame.</a><br>
At any time if you'd like to stop calling the function you passed to <strong><u>run</u></strong> simply pass the function to <strong><u>stop</u></strong></p>
                <pre><code>
        stage.stop(update);
                </code></pre>
        <p>The <strong><u>run</u></strong> method returns a JS3RunnerObject with the following properties that you can change at any time :</p>        
                
        <pre><code class='javascript'>
        delay           : Number        // how often to call the runner function in seconds
        repeatCount     : Number        // total number of times to call the runner function
        onComplete      : Function      // callback to execute when all calls to the runner function have completed
    </code></pre>
        <div class="clearfix"><hr></div>
        
        <!-- simple-example -->                    
                <div id="multiple-sprites">
                    <h2>Animating Multiple Sprites</h2>                
                <p>The following snippet creates two circles and slowly bounces them around the Stage.<br>
The "drawCircle" function just returns a basic circle and the "update" function called on every frame moves each circle along in its current direction.<br>If the circle hits the boundaries of the Stage, its direction is reversed.</p>
                <pre><code>                        
    // draw a circle and set a unique directionX & directionY value on it //    
    function drawCircle()
    {
        var c = {};
        c.size = 15; c.x = Math.random()*stage.width; c.y = Math.random()*stage.height; 
        c.fillColor = "#ddd"; c.strokeColor = "#ccc"; c.strokeWidth = 2;	
        c.dirX = Math.round(Math.random()) == 0 ? -1 : 1;
        c.dirY = Math.round(Math.random()) == 0 ? -1 : 1;
        return c;
    }
    // update function to bounce the circles around the canvas //
    function update()
    {
    	var i = stage.numChildren;
    	while ( i-- ){
    		var c = stage.getChildAt(i);
    		if (c.x >= stage.width || c.x <= 0) c.dirX *=-1;
    		if (c.y >= stage.height || c.y <= 0) c.dirY *=-1;
    		c.x += c.dirX;
    		c.y += c.dirY;
    	}
    }
    // attach two circles to the stage //
    var c1 = new JS3Circle(drawCircle());
    stage.addChild( c1 );
    var c2 = new JS3Circle(drawCircle());
    stage.addChild( c2 );                
    // finally call the update function on every frame //
    stage.run(update);
                </code></pre>
                <canvas id="x7" width='898' height='100'></canvas>  
                <button id='x7-btn' class='btn btn-primary'>Stop Updating</button>
			</div>
			<div class="clearfix"></div><hr>
            <p class='next-page'><b>Awesome, you're ready for the next section. Click here to learn about setting up for <a href=<?php linkto('/mouse-events');?>>Interactivity & Mouse Events.</a></b></p><hr>
        <?php include ('../local/footer.php'); ?>
        <script type="text/javascript" src="./tweening.js"></script>            
	    <script type="text/javascript" src="http://yandex.st/highlightjs/6.1/highlight.min.js"></script>
        <script>hljs.initHighlightingOnLoad();</script>
    </body>
</html>