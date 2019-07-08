import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return [
            'Angus Young',
            'Bradley Nowell',
            'Secret Man'
        ]
    }
});
