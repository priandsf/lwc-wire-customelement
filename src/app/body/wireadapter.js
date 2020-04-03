import { register, ValueChangedEvent } from 'wire-service';

export const adapter = Symbol('adapter');

register(adapter, eventTarget => {

    let connected = false;
    let message;

    function emit() {
        if(connected) {
            const o = {message};
            eventTarget.dispatchEvent(new ValueChangedEvent(o));
        }
    }

    function handleConfig(options) {
        message = options.message;
        emit();
    }

    function handleConnect() {
        connected = true;
        emit();
    }

    function handleDisconnect() {
        connected = false;
    }

    // Connect the wire adapter
    eventTarget.addEventListener('config', handleConfig);
    eventTarget.addEventListener('connect', handleConnect);
    eventTarget.addEventListener('disconnect', handleDisconnect);
});
