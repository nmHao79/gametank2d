// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    action: cc.ActionInterval;

    // LIFE-CYCLE CALLBACKS:

    onCollisionEnter(other,self)
    {
        if(other.tag == 2)
        {
            this.node.destroy();
            this.node.parent.getComponent('Game').addScore();
        }
        if(other.tag == 1)
        {
            cc.director.loadScene("Game");
        }
    }
    moveToPlayer()
    {
        var moveAction = cc.moveTo(3,this.node.parent.getChildByName('tankmain').position.x,this.node.parent.getChildByName('tankmain').position.y);
        return moveAction;
    }
    onLoad () {
        this.action = this.moveToPlayer();
        this.node.runAction(this.action);

        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        
        cc.director.preloadScene("Game");
    }
    start () {

    }

    // update (dt) {}
}
