// Sleep Promise
function Delay(ms:number): Promise<any> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default Delay;