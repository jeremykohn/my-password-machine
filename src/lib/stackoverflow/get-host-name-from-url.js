/* 
 * Source: Stack Overflow (stackoverflow.com/a/19801744/3345375)
 * Author: kingofhypocrites (stackoverflow.com/users/659858/kingofhypocrites)
 * License: Creative Commons Attribution-ShareAlike (BY-SA) 3.0 (creativecommons.org/licenses/by-sa/3.0/legalcode)
 */

function getHostNameFromUrl(url) {
    // <summary>Parses the domain/host from a given url.</summary>
    var a = document.createElement("a");
    a.href = url;

    // Handle chrome which will default to domain where script is called from if invalid
    return url.indexOf(a.hostname) != -1 ? a.hostname : '';
}
