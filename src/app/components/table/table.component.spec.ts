import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableComponent } from './table.component';
import { By } from '@angular/platform-browser';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render headers correctly', () => {
    component.headers = ['ID', 'Name', 'Age', 'City'];
    fixture.detectChanges();

    const headers = fixture.debugElement.queryAll(By.css('th'));
    expect(headers.length).toBe(4);
    expect(headers[0].nativeElement.textContent.trim()).toBe('ID');
    expect(headers[1].nativeElement.textContent.trim()).toBe('Name');
    expect(headers[2].nativeElement.textContent.trim()).toBe('Age');
    expect(headers[3].nativeElement.textContent.trim()).toBe('City');
  });

  it('should render rows correctly', () => {
    component.items = [
      { id: 1, name: 'Alice', age: 25, city: 'New York' },
      { id: 2, name: 'Bob', age: 30, city: 'Los Angeles' }
    ];
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(2);
  });

  it('should render cell values correctly', () => {
    component.items = [
      { id: 1, name: 'Alice', age: 25, city: 'New York' }
    ];
    fixture.detectChanges();

    const cells = fixture.debugElement.queryAll(By.css('tbody td'));
    expect(cells.length).toBe(4); // Agora verificamos 4 colunas, incluindo ID
    expect(cells[0].nativeElement.textContent.trim()).toBe('1');
    expect(cells[1].nativeElement.textContent.trim()).toBe('Alice');
    expect(cells[2].nativeElement.textContent.trim()).toBe('25');
    expect(cells[3].nativeElement.textContent.trim()).toBe('New York');
  });

  it('should handle empty items array', () => {
    component.items = [];
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(0);
  });

  it('should use trackBy function correctly', () => {
    const item = { id: 1, name: 'Alice', age: 25 };
    expect(component.trackBy(0, item)).toBe(1); // trackBy deve retornar o id do item
  });
});
