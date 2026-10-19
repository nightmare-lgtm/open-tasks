export default class GeoCoder {
    async getGeocode(address: string) {
        return await $fetch('/api/geocode', {
            query: {
                address
            }
        })
    }
}