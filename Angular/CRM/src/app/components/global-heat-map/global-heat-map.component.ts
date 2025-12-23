import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import * as L from 'leaflet';
import { persianDigits } from '../../../shared/helpers/toPersianNumber';

@Component({
  selector: 'app-global-heat-map',
  templateUrl: './global-heat-map.component.html',
  styleUrls: ['./global-heat-map.component.scss'],
})
export class GlobalHeatMapComponent implements AfterViewInit, OnDestroy {
  private map: L.Map | null = null;
  private markers: L.Layer[] = [];
  persianDigits = persianDigits
  ngAfterViewInit(): void {
    this.initMap();
  }

  ngOnDestroy(): void {
    if (this.map) {
      this.map.remove();
    }
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [20, 0],
      zoom: 1.4,
      zoomControl: true,
      dragging: true,
      scrollWheelZoom: true,
      doubleClickZoom: true,
      boxZoom: true,
      keyboard: true,
      touchZoom: true,
      fadeAnimation: true,
      markerZoomAnimation: true,
      preferCanvas: true,
      attributionControl: false,
    });

    // Beautiful base map
    L.tileLayer(
      'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
      {
        attribution: '',
        maxZoom: 6,
        minZoom: 1,
      }
    ).addTo(this.map!);

    // Add locations with enhanced visuals
    this.addLocations();
  }

  private addLocations(): void {
    const locations = [
      {
        name: 'ایالات متحده',
        lat: 39.8283,
        lng: -88.5795,
        color: '#5b5fff',
        intensity: 0.8,
      },
      {
        name: 'برزیل',
        lat: -14.235,
        lng: -51.9253,
        color: '#5bc0ff',
        intensity: 0.7,
      },
      {
        name: 'ایرلند',
        lat: 53.4129,
        lng: -8.2439,
        color: '#ffb84d',
        intensity: 0.6,
      },
      {
        name: 'فلسطین',
        lat: 31.9522,
        lng: 35.2332,
        color: '#4caf50',
        intensity: 0.9,
      },
    ];

    locations.forEach((loc, index) => {
      // Create gradient circles for heat effect
      this.createGradientCircle(loc, index);

      // Add marker with tooltip
      this.addMarker(loc, index);
    });
  }

  private createGradientCircle(loc: any, index: number): void {
    // Create multiple circles for gradient effect
    const radii = [750000, 750000, 850000];
    const opacities = [0.15, 0.25, 0.4];

    radii.forEach((radius, i) => {
      const circle = L.circle([loc.lat, loc.lng], {
        radius: radius,
        color: loc.color,
        fillColor: loc.color,
        fillOpacity: opacities[i],
        weight: i === radii.length - 1 ? 2 : 0,
        className: `heat-circle heat-${index}-${i}`,
      }).addTo(this.map!);

      this.markers.push(circle);
    });
  }

  private addMarker(loc: any, index: number): void {
    // Create custom marker
    const markerHtml = `
      <div class="custom-marker" style="background: ${loc.color}">
        <div class="marker-core"></div>
      </div>
    `;

    const icon = L.divIcon({
      html: markerHtml,
      className: 'custom-marker-container',
      iconSize: [24, 24],
      iconAnchor: [12, 12],
    });

    const marker = L.marker([loc.lat, loc.lng], { icon })
      .addTo(this.map!)
      .bindTooltip(
        `
        <div class="location-tooltip">
          <strong>${loc.name}</strong>
        </div>
      `,
        {
          permanent: false,
          direction: 'top',
          className: 'custom-tooltip',
          offset: [0, -20],
        }
      );

    this.markers.push(marker);
  }
}
