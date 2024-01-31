function Appprops () {
    return (
        <div className="Jokes--props">
          <Jokes
            setup="I got my daughter a fridge for her birthday"
            punchline="I can't wait to see her face light up when she sees it." 
            />
          <Jokes
                setup="How did the hacker escape the police?"
                punchline="He just ransomware" 
                />
          <Jokes
                setup="Why don't pirates travel on the mountain roads"
                punchline="Scurvy" 
                />
          <Jokes
                setup="Why do bees stay in their hives during winter?"
                punchline="Swarm" 
                />
          <Jokes
                setup="What's the best thing about Switzerland"
                punchline="I don't know, but the flag is big" 
                />
        </div>
      
                
    )
}

function Jokes ({setup, punchline}) {
    return (
        <div className="joke">
           <h1>{setup}</h1>
           <h3>{punchline}</h3>
        </div>
        
    )
         
}

ReactDOM.render (
    <div>
        
        <Appprops />
        <Jokes />
        
    </div>,
document.getElementById("root"))