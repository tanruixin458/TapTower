const {ccclass, property} = cc._decorator;

@ccclass
export default class launch extends cc.Component {

    @property({
		type: cc.Prefab
	})
    towerPrefab: cc.Prefab = null;

    onLoad() {
		let towerNode = cc.instantiate(this.towerPrefab);
		towerNode.setParent(this.node);
		towerNode.setPosition(0, 0);
	}

    start() {

    }

    update(dt: number) {

	}
}
