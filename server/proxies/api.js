'use strict';

const proxyPath = '/api';

module.exports = function(app) {
  const express = require('express');
  const request = require('request');

  app.use(express.json());

  app.use(proxyPath, function(req, res, next){
    req.body.variables = JSON.stringify(req.body.variables);

    let options = {
      url: 'https://api.yelp.com/v3/graphql',
      headers: {
        Authorization: 'Bearer aJsbqIM7Hjs-uEim_1JgxdeOok7QnbcTT9TOCTb3SuYzrv05tNfeqlWyRJ085Yeh2F7pNQxkc4GNXsbYI_n4_EBkSEq56ssNgFLgEwoNWbf_xOLDinAmZs_URYyXXXYx'
      },
      method: 'POST',
      body: req.body,
      json: true
    };

    request(options, function(err, httpResponse, body) {
      res.send(body);
      console.log(err, httpResponse, body);
    });
  });
};
