import{Octokit as c}from"https://esm.sh/@octokit/core";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const u=document.getElementById("fastboot-form"),l=document.getElementById("url-input"),f=document.getElementById("rom-type-select"),d=document.getElementById("name-input"),a="YOUR_GITHUB",m="Jefino9488",p="XAGA-builder",g="FASTBOOT.yml",y=new c({auth:a});u.addEventListener("submit",async n=>{n.preventDefault();try{const o=await y.request("POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches",{owner:m,repo:p,workflow_id:g,ref:"fastboot",inputs:{URL:l.value,ROM_TYPE:f.value,Name:d.value}});o.status===204?console.log("GitHub Action triggered successfully!"):console.error("Error triggering GitHub Action:",o.status)}catch(o){console.error("Error triggering GitHub Action:",o)}});
