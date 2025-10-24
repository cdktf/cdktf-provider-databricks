# `dataDatabricksBudgetPolicies` Submodule <a name="`dataDatabricksBudgetPolicies` Submodule" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksBudgetPolicies <a name="DataDatabricksBudgetPolicies" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/budget_policies databricks_budget_policies}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.Initializer"></a>

```typescript
import { dataDatabricksBudgetPolicies } from '@cdktf/provider-databricks'

new dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies(scope: Construct, id: string, config?: DataDatabricksBudgetPoliciesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesConfig">DataDatabricksBudgetPoliciesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesConfig">DataDatabricksBudgetPoliciesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.putFilterBy">putFilterBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.putSortSpec">putSortSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.resetFilterBy">resetFilterBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.resetPageSize">resetPageSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.resetSortSpec">resetSortSpec</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilterBy` <a name="putFilterBy" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.putFilterBy"></a>

```typescript
public putFilterBy(value: DataDatabricksBudgetPoliciesFilterBy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.putFilterBy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesFilterBy">DataDatabricksBudgetPoliciesFilterBy</a>

---

##### `putSortSpec` <a name="putSortSpec" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.putSortSpec"></a>

```typescript
public putSortSpec(value: DataDatabricksBudgetPoliciesSortSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.putSortSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesSortSpec">DataDatabricksBudgetPoliciesSortSpec</a>

---

##### `resetFilterBy` <a name="resetFilterBy" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.resetFilterBy"></a>

```typescript
public resetFilterBy(): void
```

##### `resetPageSize` <a name="resetPageSize" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.resetPageSize"></a>

```typescript
public resetPageSize(): void
```

##### `resetSortSpec` <a name="resetSortSpec" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.resetSortSpec"></a>

```typescript
public resetSortSpec(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksBudgetPolicies resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.isConstruct"></a>

```typescript
import { dataDatabricksBudgetPolicies } from '@cdktf/provider-databricks'

dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.isTerraformElement"></a>

```typescript
import { dataDatabricksBudgetPolicies } from '@cdktf/provider-databricks'

dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.isTerraformDataSource"></a>

```typescript
import { dataDatabricksBudgetPolicies } from '@cdktf/provider-databricks'

dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.generateConfigForImport"></a>

```typescript
import { dataDatabricksBudgetPolicies } from '@cdktf/provider-databricks'

dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataDatabricksBudgetPolicies resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksBudgetPolicies to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksBudgetPolicies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/budget_policies#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksBudgetPolicies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.property.filterBy">filterBy</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesFilterByOutputReference">DataDatabricksBudgetPoliciesFilterByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.property.policies">policies</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesList">DataDatabricksBudgetPoliciesPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.property.sortSpec">sortSpec</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesSortSpecOutputReference">DataDatabricksBudgetPoliciesSortSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.property.filterByInput">filterByInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesFilterBy">DataDatabricksBudgetPoliciesFilterBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.property.pageSizeInput">pageSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.property.sortSpecInput">sortSpecInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesSortSpec">DataDatabricksBudgetPoliciesSortSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.property.pageSize">pageSize</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filterBy`<sup>Required</sup> <a name="filterBy" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.property.filterBy"></a>

```typescript
public readonly filterBy: DataDatabricksBudgetPoliciesFilterByOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesFilterByOutputReference">DataDatabricksBudgetPoliciesFilterByOutputReference</a>

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.property.policies"></a>

```typescript
public readonly policies: DataDatabricksBudgetPoliciesPoliciesList;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesList">DataDatabricksBudgetPoliciesPoliciesList</a>

---

##### `sortSpec`<sup>Required</sup> <a name="sortSpec" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.property.sortSpec"></a>

```typescript
public readonly sortSpec: DataDatabricksBudgetPoliciesSortSpecOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesSortSpecOutputReference">DataDatabricksBudgetPoliciesSortSpecOutputReference</a>

---

##### `filterByInput`<sup>Optional</sup> <a name="filterByInput" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.property.filterByInput"></a>

```typescript
public readonly filterByInput: IResolvable | DataDatabricksBudgetPoliciesFilterBy;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesFilterBy">DataDatabricksBudgetPoliciesFilterBy</a>

---

##### `pageSizeInput`<sup>Optional</sup> <a name="pageSizeInput" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.property.pageSizeInput"></a>

```typescript
public readonly pageSizeInput: number;
```

- *Type:* number

---

##### `sortSpecInput`<sup>Optional</sup> <a name="sortSpecInput" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.property.sortSpecInput"></a>

```typescript
public readonly sortSpecInput: IResolvable | DataDatabricksBudgetPoliciesSortSpec;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesSortSpec">DataDatabricksBudgetPoliciesSortSpec</a>

---

##### `pageSize`<sup>Required</sup> <a name="pageSize" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.property.pageSize"></a>

```typescript
public readonly pageSize: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksBudgetPoliciesConfig <a name="DataDatabricksBudgetPoliciesConfig" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesConfig.Initializer"></a>

```typescript
import { dataDatabricksBudgetPolicies } from '@cdktf/provider-databricks'

const dataDatabricksBudgetPoliciesConfig: dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesConfig.property.filterBy">filterBy</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesFilterBy">DataDatabricksBudgetPoliciesFilterBy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/budget_policies#filter_by DataDatabricksBudgetPolicies#filter_by}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesConfig.property.pageSize">pageSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/budget_policies#page_size DataDatabricksBudgetPolicies#page_size}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesConfig.property.sortSpec">sortSpec</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesSortSpec">DataDatabricksBudgetPoliciesSortSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/budget_policies#sort_spec DataDatabricksBudgetPolicies#sort_spec}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `filterBy`<sup>Optional</sup> <a name="filterBy" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesConfig.property.filterBy"></a>

```typescript
public readonly filterBy: DataDatabricksBudgetPoliciesFilterBy;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesFilterBy">DataDatabricksBudgetPoliciesFilterBy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/budget_policies#filter_by DataDatabricksBudgetPolicies#filter_by}.

---

##### `pageSize`<sup>Optional</sup> <a name="pageSize" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesConfig.property.pageSize"></a>

```typescript
public readonly pageSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/budget_policies#page_size DataDatabricksBudgetPolicies#page_size}.

---

##### `sortSpec`<sup>Optional</sup> <a name="sortSpec" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesConfig.property.sortSpec"></a>

```typescript
public readonly sortSpec: DataDatabricksBudgetPoliciesSortSpec;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesSortSpec">DataDatabricksBudgetPoliciesSortSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/budget_policies#sort_spec DataDatabricksBudgetPolicies#sort_spec}.

---

### DataDatabricksBudgetPoliciesFilterBy <a name="DataDatabricksBudgetPoliciesFilterBy" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesFilterBy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesFilterBy.Initializer"></a>

```typescript
import { dataDatabricksBudgetPolicies } from '@cdktf/provider-databricks'

const dataDatabricksBudgetPoliciesFilterBy: dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesFilterBy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesFilterBy.property.creatorUserId">creatorUserId</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/budget_policies#creator_user_id DataDatabricksBudgetPolicies#creator_user_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesFilterBy.property.creatorUserName">creatorUserName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/budget_policies#creator_user_name DataDatabricksBudgetPolicies#creator_user_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesFilterBy.property.policyName">policyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/budget_policies#policy_name DataDatabricksBudgetPolicies#policy_name}. |

---

##### `creatorUserId`<sup>Optional</sup> <a name="creatorUserId" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesFilterBy.property.creatorUserId"></a>

```typescript
public readonly creatorUserId: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/budget_policies#creator_user_id DataDatabricksBudgetPolicies#creator_user_id}.

---

##### `creatorUserName`<sup>Optional</sup> <a name="creatorUserName" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesFilterBy.property.creatorUserName"></a>

```typescript
public readonly creatorUserName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/budget_policies#creator_user_name DataDatabricksBudgetPolicies#creator_user_name}.

---

##### `policyName`<sup>Optional</sup> <a name="policyName" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesFilterBy.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/budget_policies#policy_name DataDatabricksBudgetPolicies#policy_name}.

---

### DataDatabricksBudgetPoliciesPolicies <a name="DataDatabricksBudgetPoliciesPolicies" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPolicies.Initializer"></a>

```typescript
import { dataDatabricksBudgetPolicies } from '@cdktf/provider-databricks'

const dataDatabricksBudgetPoliciesPolicies: dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPolicies = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPolicies.property.policyId">policyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/budget_policies#policy_id DataDatabricksBudgetPolicies#policy_id}. |

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPolicies.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/budget_policies#policy_id DataDatabricksBudgetPolicies#policy_id}.

---

### DataDatabricksBudgetPoliciesPoliciesCustomTags <a name="DataDatabricksBudgetPoliciesPoliciesCustomTags" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTags.Initializer"></a>

```typescript
import { dataDatabricksBudgetPolicies } from '@cdktf/provider-databricks'

const dataDatabricksBudgetPoliciesPoliciesCustomTags: dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/budget_policies#key DataDatabricksBudgetPolicies#key}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/budget_policies#value DataDatabricksBudgetPolicies#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/budget_policies#key DataDatabricksBudgetPolicies#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/budget_policies#value DataDatabricksBudgetPolicies#value}.

---

### DataDatabricksBudgetPoliciesSortSpec <a name="DataDatabricksBudgetPoliciesSortSpec" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesSortSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesSortSpec.Initializer"></a>

```typescript
import { dataDatabricksBudgetPolicies } from '@cdktf/provider-databricks'

const dataDatabricksBudgetPoliciesSortSpec: dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesSortSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesSortSpec.property.descending">descending</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/budget_policies#descending DataDatabricksBudgetPolicies#descending}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesSortSpec.property.field">field</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/budget_policies#field DataDatabricksBudgetPolicies#field}. |

---

##### `descending`<sup>Optional</sup> <a name="descending" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesSortSpec.property.descending"></a>

```typescript
public readonly descending: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/budget_policies#descending DataDatabricksBudgetPolicies#descending}.

---

##### `field`<sup>Optional</sup> <a name="field" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesSortSpec.property.field"></a>

```typescript
public readonly field: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/budget_policies#field DataDatabricksBudgetPolicies#field}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksBudgetPoliciesFilterByOutputReference <a name="DataDatabricksBudgetPoliciesFilterByOutputReference" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesFilterByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesFilterByOutputReference.Initializer"></a>

```typescript
import { dataDatabricksBudgetPolicies } from '@cdktf/provider-databricks'

new dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesFilterByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesFilterByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesFilterByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesFilterByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesFilterByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesFilterByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesFilterByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesFilterByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesFilterByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesFilterByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesFilterByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesFilterByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesFilterByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesFilterByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesFilterByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesFilterByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesFilterByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesFilterByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesFilterByOutputReference.resetCreatorUserId">resetCreatorUserId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesFilterByOutputReference.resetCreatorUserName">resetCreatorUserName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesFilterByOutputReference.resetPolicyName">resetPolicyName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesFilterByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesFilterByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesFilterByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesFilterByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesFilterByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesFilterByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesFilterByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesFilterByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesFilterByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesFilterByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesFilterByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesFilterByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesFilterByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesFilterByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesFilterByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesFilterByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesFilterByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesFilterByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesFilterByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesFilterByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesFilterByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesFilterByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesFilterByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesFilterByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreatorUserId` <a name="resetCreatorUserId" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesFilterByOutputReference.resetCreatorUserId"></a>

```typescript
public resetCreatorUserId(): void
```

##### `resetCreatorUserName` <a name="resetCreatorUserName" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesFilterByOutputReference.resetCreatorUserName"></a>

```typescript
public resetCreatorUserName(): void
```

##### `resetPolicyName` <a name="resetPolicyName" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesFilterByOutputReference.resetPolicyName"></a>

```typescript
public resetPolicyName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesFilterByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesFilterByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesFilterByOutputReference.property.creatorUserIdInput">creatorUserIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesFilterByOutputReference.property.creatorUserNameInput">creatorUserNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesFilterByOutputReference.property.policyNameInput">policyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesFilterByOutputReference.property.creatorUserId">creatorUserId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesFilterByOutputReference.property.creatorUserName">creatorUserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesFilterByOutputReference.property.policyName">policyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesFilterByOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesFilterBy">DataDatabricksBudgetPoliciesFilterBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesFilterByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesFilterByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `creatorUserIdInput`<sup>Optional</sup> <a name="creatorUserIdInput" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesFilterByOutputReference.property.creatorUserIdInput"></a>

```typescript
public readonly creatorUserIdInput: number;
```

- *Type:* number

---

##### `creatorUserNameInput`<sup>Optional</sup> <a name="creatorUserNameInput" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesFilterByOutputReference.property.creatorUserNameInput"></a>

```typescript
public readonly creatorUserNameInput: string;
```

- *Type:* string

---

##### `policyNameInput`<sup>Optional</sup> <a name="policyNameInput" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesFilterByOutputReference.property.policyNameInput"></a>

```typescript
public readonly policyNameInput: string;
```

- *Type:* string

---

##### `creatorUserId`<sup>Required</sup> <a name="creatorUserId" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesFilterByOutputReference.property.creatorUserId"></a>

```typescript
public readonly creatorUserId: number;
```

- *Type:* number

---

##### `creatorUserName`<sup>Required</sup> <a name="creatorUserName" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesFilterByOutputReference.property.creatorUserName"></a>

```typescript
public readonly creatorUserName: string;
```

- *Type:* string

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesFilterByOutputReference.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesFilterByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksBudgetPoliciesFilterBy;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesFilterBy">DataDatabricksBudgetPoliciesFilterBy</a>

---


### DataDatabricksBudgetPoliciesPoliciesCustomTagsList <a name="DataDatabricksBudgetPoliciesPoliciesCustomTagsList" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsList.Initializer"></a>

```typescript
import { dataDatabricksBudgetPolicies } from '@cdktf/provider-databricks'

new dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsList.get"></a>

```typescript
public get(index: number): DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTags">DataDatabricksBudgetPoliciesPoliciesCustomTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksBudgetPoliciesPoliciesCustomTags[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTags">DataDatabricksBudgetPoliciesPoliciesCustomTags</a>[]

---


### DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference <a name="DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksBudgetPolicies } from '@cdktf/provider-databricks'

new dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTags">DataDatabricksBudgetPoliciesPoliciesCustomTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksBudgetPoliciesPoliciesCustomTags;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTags">DataDatabricksBudgetPoliciesPoliciesCustomTags</a>

---


### DataDatabricksBudgetPoliciesPoliciesList <a name="DataDatabricksBudgetPoliciesPoliciesList" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesList.Initializer"></a>

```typescript
import { dataDatabricksBudgetPolicies } from '@cdktf/provider-databricks'

new dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesList.get"></a>

```typescript
public get(index: number): DataDatabricksBudgetPoliciesPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPolicies">DataDatabricksBudgetPoliciesPolicies</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksBudgetPoliciesPolicies[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPolicies">DataDatabricksBudgetPoliciesPolicies</a>[]

---


### DataDatabricksBudgetPoliciesPoliciesOutputReference <a name="DataDatabricksBudgetPoliciesPoliciesOutputReference" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.Initializer"></a>

```typescript
import { dataDatabricksBudgetPolicies } from '@cdktf/provider-databricks'

new dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.property.bindingWorkspaceIds">bindingWorkspaceIds</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.property.customTags">customTags</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsList">DataDatabricksBudgetPoliciesPoliciesCustomTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.property.policyName">policyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.property.policyIdInput">policyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.property.policyId">policyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPolicies">DataDatabricksBudgetPoliciesPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bindingWorkspaceIds`<sup>Required</sup> <a name="bindingWorkspaceIds" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.property.bindingWorkspaceIds"></a>

```typescript
public readonly bindingWorkspaceIds: number[];
```

- *Type:* number[]

---

##### `customTags`<sup>Required</sup> <a name="customTags" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.property.customTags"></a>

```typescript
public readonly customTags: DataDatabricksBudgetPoliciesPoliciesCustomTagsList;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsList">DataDatabricksBudgetPoliciesPoliciesCustomTagsList</a>

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* string

---

##### `policyIdInput`<sup>Optional</sup> <a name="policyIdInput" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.property.policyIdInput"></a>

```typescript
public readonly policyIdInput: string;
```

- *Type:* string

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksBudgetPoliciesPolicies;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPolicies">DataDatabricksBudgetPoliciesPolicies</a>

---


### DataDatabricksBudgetPoliciesSortSpecOutputReference <a name="DataDatabricksBudgetPoliciesSortSpecOutputReference" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesSortSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesSortSpecOutputReference.Initializer"></a>

```typescript
import { dataDatabricksBudgetPolicies } from '@cdktf/provider-databricks'

new dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesSortSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesSortSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesSortSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesSortSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesSortSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesSortSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesSortSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesSortSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesSortSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesSortSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesSortSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesSortSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesSortSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesSortSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesSortSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesSortSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesSortSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesSortSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesSortSpecOutputReference.resetDescending">resetDescending</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesSortSpecOutputReference.resetField">resetField</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesSortSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesSortSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesSortSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesSortSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesSortSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesSortSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesSortSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesSortSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesSortSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesSortSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesSortSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesSortSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesSortSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesSortSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesSortSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesSortSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesSortSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesSortSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesSortSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesSortSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesSortSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesSortSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesSortSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesSortSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescending` <a name="resetDescending" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesSortSpecOutputReference.resetDescending"></a>

```typescript
public resetDescending(): void
```

##### `resetField` <a name="resetField" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesSortSpecOutputReference.resetField"></a>

```typescript
public resetField(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesSortSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesSortSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesSortSpecOutputReference.property.descendingInput">descendingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesSortSpecOutputReference.property.fieldInput">fieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesSortSpecOutputReference.property.descending">descending</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesSortSpecOutputReference.property.field">field</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesSortSpecOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesSortSpec">DataDatabricksBudgetPoliciesSortSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesSortSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesSortSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descendingInput`<sup>Optional</sup> <a name="descendingInput" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesSortSpecOutputReference.property.descendingInput"></a>

```typescript
public readonly descendingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `fieldInput`<sup>Optional</sup> <a name="fieldInput" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesSortSpecOutputReference.property.fieldInput"></a>

```typescript
public readonly fieldInput: string;
```

- *Type:* string

---

##### `descending`<sup>Required</sup> <a name="descending" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesSortSpecOutputReference.property.descending"></a>

```typescript
public readonly descending: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesSortSpecOutputReference.property.field"></a>

```typescript
public readonly field: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesSortSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksBudgetPoliciesSortSpec;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesSortSpec">DataDatabricksBudgetPoliciesSortSpec</a>

---



