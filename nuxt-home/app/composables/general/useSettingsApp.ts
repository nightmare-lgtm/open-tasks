//композебл для управления настройками приложения
//язык,тема

//Для shared состояний используем useState. 
//Эти решаем проблему, при которой ref из комозеблов расшарить можно только модульным подходом.
//Но модульный подход может привести к проблеме, при которой пользователи смогут менять цвет друг другу
//https://nuxt.com/docs/4.x/getting-started/state-management


export function useColorBackground() {
    const currentBackground = useState<number>('background', () => 210)
    const bgStyle = computed(() => {
        const h = currentBackground.value
        const isDeafult = h == 210
        const ligtness = isDeafult? 15 : 40
        const saturation = isDeafult? 20 :75
        return {
            '--main-bg-color': `hsl(${h},${ligtness}%,${saturation}%)`
        }
    })
    return {
        bgStyle,
        currentBackground
    }
}
