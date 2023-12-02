import React from "react";
import BotSpecs from './BotSpecs';
function YourBotArmy({ selectedBots, onReleaseFromArmy }) {
  //your bot army code here...

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {/*...and here...*/}
          Your Bot Army
          {selectedBots.map((bot) => (
        <BotSpecs key={bot.id} bot={bot} onReleaseFromArmy={() => onReleaseFromArmy(bot)} />
      ))}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
