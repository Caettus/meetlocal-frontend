<template>
    <div class="event-details-card">
        <div class="event-image">
            <!-- Picture of gathering -->
            <img src="path_to_image" alt="Gathering Image" />
        </div>
        <div class="event-details">
            <!-- Gathering name -->
            <h2>{{ event.gatheringName }}</h2>
            <!-- Gathering description -->
            <p>{{ event.gatheringDescription }}</p>
            <!-- Location, date, organizer, and category -->
            <div class="event-info">
                <div class="event-info-item">
                    <span class="event-info-label">Location:</span>
                    <span class="event-info-value">{{ event.gatheringLocation }}</span>
                </div>
                <div class="event-info-item">
                    <span class="event-info-label">Date:</span>
                    <span class="event-info-value">{{ event.gatheringDate }}</span>
                </div>
                <div class="event-info-item">
                    <span class="event-info-label">Organizer:</span>
                    <span class="event-info-value">{{ event.gatheringOrganizer }}</span>
                </div>
                <div class="event-info-item">
                    <span class="event-info-label">Category:</span>
                    <span class="event-info-value">{{ event.gatheringCategory }}</span>
                </div>
            </div>
        </div>
        <div class="event-actions">
            <!-- Buy tickets button -->
            <button class="buy-tickets-button">Buy Tickets</button>
            <!-- Visit organizer website link -->
            <a class="organizer-website-link" href="organizer_website_url">Visit Organizer Website</a>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    event: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.event-details-card {
    width: 90%;
    margin: 0 auto;
    background-color: #ffffff;
    border-radius: 10px;
    padding: 20px;
}

.event-image img {
    width: 100%;
    height: auto;
    border-radius: 10px;
}

.event-details {
    margin-top: 20px;
}

.event-details h2 {
    font-size: 24px;
    margin-bottom: 10px;
}

.event-details p {
    font-size: 16px;
    color: #555555;
}

.event-info {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    border-top: 1px solid #dddddd;
    border-bottom: 1px solid #dddddd;
    padding: 10px 0;
}

.event-info-item {
    display: flex;
    align-items: center;
}

.event-info-label {
    font-size: 16px;
    color: #555555;
    margin-right: 10px;
}

.event-info-value {
    font-size: 16px;
    color: #333333;
}

.event-actions {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}

.buy-tickets-button {
    background-color: #00cc00;
    color: #ffffff;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 16px;
}

.organizer-website-link {
    color: #0000cc;
    font-size: 16px;
    text-decoration: none;
}
</style>
