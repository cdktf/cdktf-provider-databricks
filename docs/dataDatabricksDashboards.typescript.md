# `dataDatabricksDashboards` Submodule <a name="`dataDatabricksDashboards` Submodule" id="@cdktf/provider-databricks.dataDatabricksDashboards"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksDashboards <a name="DataDatabricksDashboards" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/dashboards databricks_dashboards}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.Initializer"></a>

```typescript
import { dataDatabricksDashboards } from '@cdktf/provider-databricks'

new dataDatabricksDashboards.DataDatabricksDashboards(scope: Construct, id: string, config?: DataDatabricksDashboardsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsConfig">DataDatabricksDashboardsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsConfig">DataDatabricksDashboardsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.resetDashboardNameContains">resetDashboardNameContains</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDashboardNameContains` <a name="resetDashboardNameContains" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.resetDashboardNameContains"></a>

```typescript
public resetDashboardNameContains(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksDashboards resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.isConstruct"></a>

```typescript
import { dataDatabricksDashboards } from '@cdktf/provider-databricks'

dataDatabricksDashboards.DataDatabricksDashboards.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.isTerraformElement"></a>

```typescript
import { dataDatabricksDashboards } from '@cdktf/provider-databricks'

dataDatabricksDashboards.DataDatabricksDashboards.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.isTerraformDataSource"></a>

```typescript
import { dataDatabricksDashboards } from '@cdktf/provider-databricks'

dataDatabricksDashboards.DataDatabricksDashboards.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.generateConfigForImport"></a>

```typescript
import { dataDatabricksDashboards } from '@cdktf/provider-databricks'

dataDatabricksDashboards.DataDatabricksDashboards.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataDatabricksDashboards resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksDashboards to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksDashboards that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/dashboards#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksDashboards to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.property.dashboards">dashboards</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsList">DataDatabricksDashboardsDashboardsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.property.dashboardNameContainsInput">dashboardNameContainsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.property.dashboardNameContains">dashboardNameContains</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `dashboards`<sup>Required</sup> <a name="dashboards" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.property.dashboards"></a>

```typescript
public readonly dashboards: DataDatabricksDashboardsDashboardsList;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsList">DataDatabricksDashboardsDashboardsList</a>

---

##### `dashboardNameContainsInput`<sup>Optional</sup> <a name="dashboardNameContainsInput" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.property.dashboardNameContainsInput"></a>

```typescript
public readonly dashboardNameContainsInput: string;
```

- *Type:* string

---

##### `dashboardNameContains`<sup>Required</sup> <a name="dashboardNameContains" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.property.dashboardNameContains"></a>

```typescript
public readonly dashboardNameContains: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboards.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksDashboardsConfig <a name="DataDatabricksDashboardsConfig" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsConfig.Initializer"></a>

```typescript
import { dataDatabricksDashboards } from '@cdktf/provider-databricks'

const dataDatabricksDashboardsConfig: dataDatabricksDashboards.DataDatabricksDashboardsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsConfig.property.dashboardNameContains">dashboardNameContains</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/dashboards#dashboard_name_contains DataDatabricksDashboards#dashboard_name_contains}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dashboardNameContains`<sup>Optional</sup> <a name="dashboardNameContains" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsConfig.property.dashboardNameContains"></a>

```typescript
public readonly dashboardNameContains: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/dashboards#dashboard_name_contains DataDatabricksDashboards#dashboard_name_contains}.

---

### DataDatabricksDashboardsDashboards <a name="DataDatabricksDashboardsDashboards" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboards"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboards.Initializer"></a>

```typescript
import { dataDatabricksDashboards } from '@cdktf/provider-databricks'

const dataDatabricksDashboardsDashboards: dataDatabricksDashboards.DataDatabricksDashboardsDashboards = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboards.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/dashboards#display_name DataDatabricksDashboards#display_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboards.property.serializedDashboard">serializedDashboard</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/dashboards#serialized_dashboard DataDatabricksDashboards#serialized_dashboard}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboards.property.warehouseId">warehouseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/dashboards#warehouse_id DataDatabricksDashboards#warehouse_id}. |

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboards.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/dashboards#display_name DataDatabricksDashboards#display_name}.

---

##### `serializedDashboard`<sup>Optional</sup> <a name="serializedDashboard" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboards.property.serializedDashboard"></a>

```typescript
public readonly serializedDashboard: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/dashboards#serialized_dashboard DataDatabricksDashboards#serialized_dashboard}.

---

##### `warehouseId`<sup>Optional</sup> <a name="warehouseId" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboards.property.warehouseId"></a>

```typescript
public readonly warehouseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/dashboards#warehouse_id DataDatabricksDashboards#warehouse_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksDashboardsDashboardsList <a name="DataDatabricksDashboardsDashboardsList" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsList.Initializer"></a>

```typescript
import { dataDatabricksDashboards } from '@cdktf/provider-databricks'

new dataDatabricksDashboards.DataDatabricksDashboardsDashboardsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsList.get"></a>

```typescript
public get(index: number): DataDatabricksDashboardsDashboardsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboards">DataDatabricksDashboardsDashboards</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksDashboardsDashboards[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboards">DataDatabricksDashboardsDashboards</a>[]

---


### DataDatabricksDashboardsDashboardsOutputReference <a name="DataDatabricksDashboardsDashboardsOutputReference" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksDashboards } from '@cdktf/provider-databricks'

new dataDatabricksDashboards.DataDatabricksDashboardsDashboardsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsOutputReference.resetSerializedDashboard">resetSerializedDashboard</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsOutputReference.resetWarehouseId">resetWarehouseId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetSerializedDashboard` <a name="resetSerializedDashboard" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsOutputReference.resetSerializedDashboard"></a>

```typescript
public resetSerializedDashboard(): void
```

##### `resetWarehouseId` <a name="resetWarehouseId" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsOutputReference.resetWarehouseId"></a>

```typescript
public resetWarehouseId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsOutputReference.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsOutputReference.property.dashboardId">dashboardId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsOutputReference.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsOutputReference.property.lifecycleState">lifecycleState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsOutputReference.property.parentPath">parentPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsOutputReference.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsOutputReference.property.serializedDashboardInput">serializedDashboardInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsOutputReference.property.warehouseIdInput">warehouseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsOutputReference.property.serializedDashboard">serializedDashboard</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsOutputReference.property.warehouseId">warehouseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboards">DataDatabricksDashboardsDashboards</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsOutputReference.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `dashboardId`<sup>Required</sup> <a name="dashboardId" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsOutputReference.property.dashboardId"></a>

```typescript
public readonly dashboardId: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsOutputReference.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `lifecycleState`<sup>Required</sup> <a name="lifecycleState" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsOutputReference.property.lifecycleState"></a>

```typescript
public readonly lifecycleState: string;
```

- *Type:* string

---

##### `parentPath`<sup>Required</sup> <a name="parentPath" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsOutputReference.property.parentPath"></a>

```typescript
public readonly parentPath: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsOutputReference.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `serializedDashboardInput`<sup>Optional</sup> <a name="serializedDashboardInput" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsOutputReference.property.serializedDashboardInput"></a>

```typescript
public readonly serializedDashboardInput: string;
```

- *Type:* string

---

##### `warehouseIdInput`<sup>Optional</sup> <a name="warehouseIdInput" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsOutputReference.property.warehouseIdInput"></a>

```typescript
public readonly warehouseIdInput: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `serializedDashboard`<sup>Required</sup> <a name="serializedDashboard" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsOutputReference.property.serializedDashboard"></a>

```typescript
public readonly serializedDashboard: string;
```

- *Type:* string

---

##### `warehouseId`<sup>Required</sup> <a name="warehouseId" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsOutputReference.property.warehouseId"></a>

```typescript
public readonly warehouseId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboardsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksDashboardsDashboards;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDashboards.DataDatabricksDashboardsDashboards">DataDatabricksDashboardsDashboards</a>

---



