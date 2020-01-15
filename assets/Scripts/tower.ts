const {ccclass, property} = cc._decorator;

@ccclass
export default class tower extends cc.Component {

    @property({
		type: cc.Prefab
	})
    entityPrefab: cc.Prefab = null;

    onLoad() {
		// 注册事件
		this.node.on('touchstart', function(event: cc.Event.EventTouch) {
			let location = this.node.convertToNodeSpaceAR(event.getLocation());

			let entityNode = cc.instantiate(this.entityPrefab);
			entityNode.parent = this.node;
			entityNode.setPosition(location.x, location.y);
		}, this);
	}

    start() {

    }

    update(dt: number) {

	}
}
