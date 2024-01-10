<template>
    <div>
        <EventDetailsCard :gatheringId="gatheringId" />
    </div>
</template>

<script>
import EventDetailsCard from "@/components/DetailsPage/EventDetailsCard.vue";
import EventService from '@/services/EventService.js';
export default {
    name: "DetailsPage",
    components: {
        EventDetailsCard,
    },
    data() {
        return {
            gatheringId: null,
        };
    },
    methods: {
        getGathering() {
            EventService.getGathering(this.gatheringId)
                .then((response) => {
                    console.log(response);
                    this.event = response;
                    console.log(response.events);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
    created() {
        this.getGathering();
    },
};
</script>
