const apiUrl = 'https://localhost:7031/api/gathering'

export default {
    async getGatherings() {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error("Failed to fetch events");
        }
        return response.json();
    },

    async getGathering(id) {
        const response = await fetch(`${apiUrl}/${id}`);
        if (!response.ok) {
            throw new Error("Failed to fetch event");
        }
        return response.json();
    },

    async createGathering(gathering) {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(gathering),
        });
        if (!response.ok) {
            throw new Error("Failed to create event");
        }
        return response.json();
    },

    async updateGathering(gathering) {
        const response = await fetch(`${apiUrl}/${gathering.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(gathering),
        });
        if (!response.ok) {
            throw new Error("Failed to update event");
        }
        return response.json();
    },

    async deleteGathering(id) {
        const response = await fetch(`${apiUrl}/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error("Failed to delete event");
        }
        return response.json();
    },
}