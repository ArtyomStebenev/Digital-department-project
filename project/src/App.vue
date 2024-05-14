<template>
  {{ music.value }}
  <div>
    <DxDataGrid
      id="gridContainer"
      :data-source="events"
      :allow-column-reordering="true"
      :show-borders="true"
      key-expr="ID"
      @editing-start="logEvent('EditingStart')"
      @init-new-row="logEvent('InitNewRow')"
      @row-inserting="logEvent('RowInserting')"
      @row-inserted="logEvent('RowInserted')"
      @row-updating="logEvent('RowUpdating')"
      @row-updated="logEvent('RowUpdated')"
      @row-removing="logEvent('RowRemoving')"
      @row-removed="logEvent('RowRemoved')"
      @saving="logEvent('Saving')"
      @saved="logEvent('Saved')"
      @edit-canceling="logEvent('EditCanceling')"
      @edit-canceled="logEvent('EditCanceled')"
    >

      <DxPaging :enabled="true"/>
      <DxEditing
        :allow-updating="true"
        :allow-deleting="true"
        :allow-adding="true"
        mode="row"
      />

      <DxColumn
        :width="325"
        data-field="Prefix"
        caption="Name of band"
      />
      <DxColumn
        :width="325" 
        data-field="Album"
      />
      <DxColumn
        :width="125"
        data-field="Year"
        data-type="number"
      />
    </DxDataGrid>

    <div id="events">
      <div>
        <div class="caption">
          Fired events
        </div>
        <DxButton
          id="clear"
          text="Clear"
          @click="clearEvents()"
        />
      </div>
      <ul>
        <li
          v-for="(event, index) in events"
          :key="index"
        >{{ event }}</li>
      </ul>
    </div>
  </div>
</template>


<script setup lang="ts">
  import { ref } from 'vue';
  import DxButton from 'devextreme-vue/button';
  import {
    DxDataGrid, DxColumn, DxEditing, DxPaging,
  } from 'devextreme-vue/data-grid';

  import { getMusicList } from "./get.js";
  import { patchMusic } from "./patch.js";
  import { deleteMusic } from "./delete.js";
  import { postMusic } from "./post.js";

  // TODO:
  // исправить асинхронность, обращаться к элементам по ключам, протестировать все запросы
  // дописать функциональность App.vue 
  // Фичи: 
  // парсить в интернете краткую инфу об альбоме, абложку
  // прописать свой css


  //setTimeout(deleteMusic('5f0c'), 1000);
  /* let hh = {
    nameOfBand: "govno",
    album: "mocha",
    year: 1954
  } */
  //postMusic(hh);

  let music = ref('');
  //music.value = getMusicList(); 


  let jj = getMusicList();
  jj.then((result) => { console.log("Результат: " + result); });
  
  deleteMusic(6);
  


  /* const response = await fetch(mainUrl);
  let music = await response.json();
  
  console.log(music);  */ 
  
  



  const events = ref<string[]>([]);

  const logEvent = (eventName: string) => {
    events.value.unshift(eventName);
  };

  const clearEvents = () => {
    events.value = [];
  }; 
</script>


<style>
#events {
  background-color: rgba(191, 191, 191, 0.15);
  padding: 20px;
  margin-top: 20px;
}

#events > div {
  padding-bottom: 5px;
}

#events > div::after {
  content: "";
  display: table;
  clear: both;
}

#events #clear {
  float: right;
}

#events .caption {
  float: left;
  font-weight: bold;
  font-size: 115%;
  line-height: 115%;
  padding-top: 7px;
}

#events ul {
  list-style: none;
  max-height: 100px;
  overflow: auto;
  margin: 0;
}

#events ul li {
  padding: 7px 0;
  border-bottom: 1px solid #ddd;
}

#events ul li:last-child {
  border-bottom: none;
}
</style>
./get.оs