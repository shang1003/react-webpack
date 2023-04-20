import {action,observable,autorun} from 'mobx'

export  class RootStore{
    @observable
    num=12;

    @observable
    name='bishang';

    @action
    setNum=()=>{
        this.num=Math.random()
        console.log(this.num,'store中num');
    }
    disposer = autorun(() => console.log(this.name));
}

export default new RootStore()