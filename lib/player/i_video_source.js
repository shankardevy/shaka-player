/**
 * Copyright 2014 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @fileoverview Defines the IVideoSource interface.
 */

goog.provide('shaka.player.IVideoSource');

goog.require('shaka.player.AudioTrack');
goog.require('shaka.player.DrmSchemeInfo');
goog.require('shaka.player.Player');
goog.require('shaka.player.TextTrack');
goog.require('shaka.player.VideoTrack');



/**
 * @interface
 * @extends {EventTarget}
 */
shaka.player.IVideoSource = function() {};


/**
 * Destroys the video source.
 */
shaka.player.IVideoSource.prototype.destroy = function() {};


/**
 * Attaches the video source to the specified video element.
 * This allows the Player to avoid setting the video's src attribute until it
 * is ready.  Should not be called until after the load() Promise is resolved.
 *
 * @param {shaka.player.Player} player The associated Player, used for event
 *     bubbling and stats.
 * @param {!HTMLVideoElement} video The video element.
 * @return {!Promise}
 */
shaka.player.IVideoSource.prototype.attach = function(player, video) {};


/**
 * Returns an object containing everything you need to know about the DRM
 *     scheme.  If null, indicates that the source is not encrypted.
 *     Should not be called until after the load() Promise is resolved.
 * @return {shaka.player.DrmSchemeInfo}
 */
shaka.player.IVideoSource.prototype.getDrmSchemeInfo = function() {};


/**
 * Load any intermediate source material (manifest, etc.)
 *
 * @param {string} preferredLanguage The user's preferred language tag.
 * @see IETF RFC 5646
 * @see ISO 639
 * @return {!Promise}
 */
shaka.player.IVideoSource.prototype.load = function(preferredLanguage) {};


/**
 * Gets the available video tracks.
 *
 * @return {!Array.<!shaka.player.VideoTrack>}
 */
shaka.player.IVideoSource.prototype.getVideoTracks = function() {};


/**
 * Gets the available audio tracks.
 *
 * @return {!Array.<!shaka.player.AudioTrack>}
 */
shaka.player.IVideoSource.prototype.getAudioTracks = function() {};


/**
 * Gets the available text tracks.
 *
 * @return {!Array.<!shaka.player.TextTrack>}
 */
shaka.player.IVideoSource.prototype.getTextTracks = function() {};


/**
 * Gets the number of seconds of data needed to resume after buffering.
 *
 * @return {number}
 */
shaka.player.IVideoSource.prototype.getResumeThreshold = function() {};


/**
 * Select a video track by ID.
 *
 * @param {number} id The |id| field of the desired VideoTrack object.
 * @param {boolean} immediate If true, switch immediately.  Otherwise, switch
 *     when convenient.
 *
 * @return {boolean} True if the specified VideoTrack was found.
 */
shaka.player.IVideoSource.prototype.selectVideoTrack =
    function(id, immediate) {};


/**
 * Select an audio track by ID.
 *
 * @param {number} id The |id| field of the desired AudioTrack object.
 * @param {boolean} immediate If true, switch immediately.  Otherwise, switch
 *     when convenient.
 *
 * @return {boolean} True if the specified AudioTrack was found.
 */
shaka.player.IVideoSource.prototype.selectAudioTrack =
    function(id, immediate) {};


/**
 * Select a text track by ID.
 *
 * @param {number} id The |id| field of the desired TextTrack object.
 * @param {boolean} immediate If true, switch immediately.  Otherwise, switch
 *     when convenient.
 *
 * @return {boolean} True if the specified TextTrack was found.
 */
shaka.player.IVideoSource.prototype.selectTextTrack =
    function(id, immediate) {};


/**
 * Enable or disable the text track.
 *
 * @param {boolean} enabled
 */
shaka.player.IVideoSource.prototype.enableTextTrack = function(enabled) {};


/**
 * Enable or disable bitrate adaptation.
 *
 * @param {boolean} enabled
 */
shaka.player.IVideoSource.prototype.enableAdaptation = function(enabled) {};


/**
 * Sets restrictions on the video tracks which can be selected.  Tracks which
 * exceed any of these restrictions will be ignored.
 *
 * @param {!shaka.player.DrmSchemeInfo.Restrictions} restrictions
 */
shaka.player.IVideoSource.prototype.setRestrictions = function(restrictions) {};

