import {action,observable,autorun} from 'mobx'
import { RouterStore } from 'mobx-react-router';
export  class RootStore{
    query = (params = {}, refresh = false) => {
        const { pathname, search } = this.routing.location;
        const currentParams = parse(search.slice(1));
    
        const newParams = refresh ? params : { ...currentParams, ...params };
        this.routing.push(`${pathname}?${getQueryString(newParams)}`);
      };
      
    constructor() {
        this.routing = new RouterStore();
        this.routing.query = this.query;
        global.navigateTo = this.routing.push;
      }
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