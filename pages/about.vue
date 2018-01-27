<template lang="pug">
  info-page(name="Our Story")
    v-layout
      v-flex(xs6 offset-xs3)
        blockquote(v-for=`(block, i) in blocks`).text-xs-left
          | {{block}}
          v-spacer
          img(
            :src="'https://source.unsplash.com/random/200x200?' + i"
            :style=`{
              float: (i%2 ? 'right' : 'left')
            }`
          ).float-right.ma-4
      
</template>


<script>
  import InfoPage from '~/components/global/InfoPage.vue'
  export default {
    layout: 'home',
    data: _ => ({ 
      story: `Mogul talk. Bless up. The key to more success is to have a lot of pillows. Watch your back, but more importantly when you get out the shower, dry your back, it’s a cold world out there. Fan luv. Surround yourself with angels, positive energy, beautiful people, beautiful souls, clean heart, angel. Surround yourself with angels. The first of the month is coming, we have to get money, we have no choice. It cost money to eat and they don’t want you to eat. The other day the grass was brown, now it’s green because I ain’t give up. Never surrender. The key to success is to keep your head above the water, never give up.

To succeed you must believe. When you believe, you will succeed. They never said winning was easy. Some people can’t handle success, I can. Wraith talk. Another one. How’s business? Boomin. Special cloth alert. The weather is amazing, walk with me through the pathway of more success. Take this journey with me, Lion! You do know, you do know that they don’t want you to have lunch. I’m keeping it real with you, so what you going do is have lunch. Learning is cool, but knowing is better, and I know the key to success.

Bless up. Mogul talk. They will try to close the door on you, just open it. Put it this way, it took me twenty five years to get these plants, twenty five years of blood sweat and tears, and I’m never giving up, I’m just getting started. Hammock talk come soon. In life there will be road blocks but we will over come it. The key is to enjoy life, because they don’t want you to enjoy life. I promise you, they don’t want you to jetski, they don’t want you to smile.

Let’s see what Chef Dee got that they don’t want us to eat. The key to more success is to get a massage once a week, very important, major key, cloth talk. They don’t want us to win. The key to more success is to have a lot of pillows. They never said winning was easy. Some people can’t handle success, I can. Learning is cool, but knowing is better, and I know the key to success. It’s important to use cocoa butter. It’s the key to more success, why not live smooth? Why live rough? Eliptical talk.

A major key, never panic. Don’t panic, when it gets crazy and rough, don’t panic, stay calm. Find peace, life is like a water fall, you’ve gotta flow. The key to more success is to get a massage once a week, very important, major key, cloth talk. The key to success is to keep your head above the water, never give up. They will try to close the door on you, just open it. Cloth talk. Cloth talk. Every chance I get, I water the plants, Lion!

Watch your back, but more importantly when you get out the shower, dry your back, it’s a cold world out there. Stay focused. To be successful you’ve got to work hard, to make history, simple, you’ve got to make it. Learning is cool, but knowing is better, and I know the key to success. The other day the grass was brown, now it’s green because I ain’t give up. Never surrender. Major key, don’t fall for the trap, stay focused. It’s the ones closest to you that want to see you fail.

Celebrate success right, the only way, apple. They key is to have every key, the key to open every door. The weather is amazing, walk with me through the pathway of more success. Take this journey with me, Lion! Egg whites, turkey sausage, wheat toast, water. Of course they don’t want us to eat our breakfast, so we are going to enjoy our breakfast. Always remember in the jungle there’s a lot of they in there, after you overcome they, you will make it to paradise. The key to success is to keep your head above the water, never give up. Look at the sunset, life is amazing, life is beautiful, life is what you make it.

The other day the grass was brown, now it’s green because I ain’t give up. Never surrender. Find peace, life is like a water fall, you’ve gotta flow. The first of the month is coming, we have to get money, we have no choice. It cost money to eat and they don’t want you to eat. It’s on you how you want to live your life. Everyone has a choice. I pick my choice, squeaky clean. A major key, never panic. Don’t panic, when it gets crazy and rough, don’t panic, stay calm. I’m giving you cloth talk, cloth. Special cloth alert, cut from a special cloth.

Life is what you make it, so let’s make it. The key is to drink coconut, fresh coconut, trust me. Lion! Every chance I get, I water the plants, Lion! To be successful you’ve got to work hard, to make history, simple, you’ve got to make it. They don’t want us to eat. The key to more success is to have a lot of pillows. Life is what you make it, so let’s make it. Surround yourself with angels. Another one. In life you have to take the trash out, if you have trash in your life, take it out, throw it away, get rid of it, major key.`
    }),
  computed: {
    blocks () {
      return this.story.split('\n\n')
    }
  },
  components: {
    InfoPage
  }
  }

</script>


<style lang="scss" scoped>

</style>