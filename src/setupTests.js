import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

global.console = {
    // suppress these console functions
    error: console.error,
    warn: console.warn,

    // keep these console functions
    log: console.log,
    info: console.info,
    debug: console.debug,
}
