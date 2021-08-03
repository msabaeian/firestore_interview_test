import { RoutesName } from "constant";

function ResetScene(fn: any, route: RoutesName) : void{
    fn({
        index:0,
        routes: [{ name: route }]
    })
}

export default ResetScene