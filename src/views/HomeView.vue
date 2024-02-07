<template>
  <div>
    <SurveyComponent :model="survey" class="survey-form" />
  </div>
</template>

<script setup lang="js">
import { Model } from "survey-core";
import { json } from "@/assets/data";
import emailjs from '@emailjs/browser';
import "survey-core/survey.i18n.js";
import "survey-creator-core/survey-creator-core.i18n.js";
import "survey-core/defaultV2.css";
import "survey-creator-core/survey-creator-core.css";

  const options = {
    showTranslationTab: true
  };

const survey = new Model(json, options );
survey.onComplete.add((sender) => {
      const data = JSON.stringify(sender.data, null, 3);
      try {
        emailjs.send('service_v52f5vk', 'template_2sgwmto',  {
          message: data
        },
        {
        publicKey: 'qrnLtQJU6T7p3HY6h'
      })
      } catch (err) {
           if (err instanceof ReferenceError) {
            alert( "JSON Error: " + err.message );
           } else {
            throw err; // rethrow
           }
      }
});
</script>

<style>
.form {
  padding-top: 10px;
}
</style>
