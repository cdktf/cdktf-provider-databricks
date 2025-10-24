# `dataDatabricksAlertsV2` Submodule <a name="`dataDatabricksAlertsV2` Submodule" id="@cdktf/provider-databricks.dataDatabricksAlertsV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAlertsV2 <a name="DataDatabricksAlertsV2" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/alerts_v2 databricks_alerts_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.Initializer"></a>

```typescript
import { dataDatabricksAlertsV2 } from '@cdktf/provider-databricks'

new dataDatabricksAlertsV2.DataDatabricksAlertsV2(scope: Construct, id: string, config?: DataDatabricksAlertsV2Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config">DataDatabricksAlertsV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config">DataDatabricksAlertsV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.resetPageSize">resetPageSize</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetPageSize` <a name="resetPageSize" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.resetPageSize"></a>

```typescript
public resetPageSize(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksAlertsV2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.isConstruct"></a>

```typescript
import { dataDatabricksAlertsV2 } from '@cdktf/provider-databricks'

dataDatabricksAlertsV2.DataDatabricksAlertsV2.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.isTerraformElement"></a>

```typescript
import { dataDatabricksAlertsV2 } from '@cdktf/provider-databricks'

dataDatabricksAlertsV2.DataDatabricksAlertsV2.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.isTerraformDataSource"></a>

```typescript
import { dataDatabricksAlertsV2 } from '@cdktf/provider-databricks'

dataDatabricksAlertsV2.DataDatabricksAlertsV2.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.generateConfigForImport"></a>

```typescript
import { dataDatabricksAlertsV2 } from '@cdktf/provider-databricks'

dataDatabricksAlertsV2.DataDatabricksAlertsV2.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataDatabricksAlertsV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksAlertsV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksAlertsV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/alerts_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksAlertsV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.alerts">alerts</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList">DataDatabricksAlertsV2AlertsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.pageSizeInput">pageSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.pageSize">pageSize</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `alerts`<sup>Required</sup> <a name="alerts" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.alerts"></a>

```typescript
public readonly alerts: DataDatabricksAlertsV2AlertsList;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList">DataDatabricksAlertsV2AlertsList</a>

---

##### `pageSizeInput`<sup>Optional</sup> <a name="pageSizeInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.pageSizeInput"></a>

```typescript
public readonly pageSizeInput: number;
```

- *Type:* number

---

##### `pageSize`<sup>Required</sup> <a name="pageSize" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.pageSize"></a>

```typescript
public readonly pageSize: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAlertsV2Alerts <a name="DataDatabricksAlertsV2Alerts" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Alerts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Alerts.Initializer"></a>

```typescript
import { dataDatabricksAlertsV2 } from '@cdktf/provider-databricks'

const dataDatabricksAlertsV2Alerts: dataDatabricksAlertsV2.DataDatabricksAlertsV2Alerts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Alerts.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/alerts_v2#id DataDatabricksAlertsV2#id}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Alerts.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/alerts_v2#id DataDatabricksAlertsV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataDatabricksAlertsV2AlertsEffectiveRunAs <a name="DataDatabricksAlertsV2AlertsEffectiveRunAs" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAs.Initializer"></a>

```typescript
import { dataDatabricksAlertsV2 } from '@cdktf/provider-databricks'

const dataDatabricksAlertsV2AlertsEffectiveRunAs: dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAs.property.servicePrincipalName">servicePrincipalName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/alerts_v2#service_principal_name DataDatabricksAlertsV2#service_principal_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAs.property.userName">userName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/alerts_v2#user_name DataDatabricksAlertsV2#user_name}. |

---

##### `servicePrincipalName`<sup>Optional</sup> <a name="servicePrincipalName" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAs.property.servicePrincipalName"></a>

```typescript
public readonly servicePrincipalName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/alerts_v2#service_principal_name DataDatabricksAlertsV2#service_principal_name}.

---

##### `userName`<sup>Optional</sup> <a name="userName" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAs.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/alerts_v2#user_name DataDatabricksAlertsV2#user_name}.

---

### DataDatabricksAlertsV2AlertsEvaluation <a name="DataDatabricksAlertsV2AlertsEvaluation" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluation.Initializer"></a>

```typescript
import { dataDatabricksAlertsV2 } from '@cdktf/provider-databricks'

const dataDatabricksAlertsV2AlertsEvaluation: dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluation.property.comparisonOperator">comparisonOperator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/alerts_v2#comparison_operator DataDatabricksAlertsV2#comparison_operator}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluation.property.emptyResultState">emptyResultState</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/alerts_v2#empty_result_state DataDatabricksAlertsV2#empty_result_state}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluation.property.notification">notification</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotification">DataDatabricksAlertsV2AlertsEvaluationNotification</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/alerts_v2#notification DataDatabricksAlertsV2#notification}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluation.property.source">source</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSource">DataDatabricksAlertsV2AlertsEvaluationSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/alerts_v2#source DataDatabricksAlertsV2#source}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluation.property.threshold">threshold</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThreshold">DataDatabricksAlertsV2AlertsEvaluationThreshold</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/alerts_v2#threshold DataDatabricksAlertsV2#threshold}. |

---

##### `comparisonOperator`<sup>Optional</sup> <a name="comparisonOperator" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluation.property.comparisonOperator"></a>

```typescript
public readonly comparisonOperator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/alerts_v2#comparison_operator DataDatabricksAlertsV2#comparison_operator}.

---

##### `emptyResultState`<sup>Optional</sup> <a name="emptyResultState" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluation.property.emptyResultState"></a>

```typescript
public readonly emptyResultState: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/alerts_v2#empty_result_state DataDatabricksAlertsV2#empty_result_state}.

---

##### `notification`<sup>Optional</sup> <a name="notification" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluation.property.notification"></a>

```typescript
public readonly notification: DataDatabricksAlertsV2AlertsEvaluationNotification;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotification">DataDatabricksAlertsV2AlertsEvaluationNotification</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/alerts_v2#notification DataDatabricksAlertsV2#notification}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluation.property.source"></a>

```typescript
public readonly source: DataDatabricksAlertsV2AlertsEvaluationSource;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSource">DataDatabricksAlertsV2AlertsEvaluationSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/alerts_v2#source DataDatabricksAlertsV2#source}.

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluation.property.threshold"></a>

```typescript
public readonly threshold: DataDatabricksAlertsV2AlertsEvaluationThreshold;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThreshold">DataDatabricksAlertsV2AlertsEvaluationThreshold</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/alerts_v2#threshold DataDatabricksAlertsV2#threshold}.

---

### DataDatabricksAlertsV2AlertsEvaluationNotification <a name="DataDatabricksAlertsV2AlertsEvaluationNotification" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotification.Initializer"></a>

```typescript
import { dataDatabricksAlertsV2 } from '@cdktf/provider-databricks'

const dataDatabricksAlertsV2AlertsEvaluationNotification: dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotification = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotification.property.notifyOnOk">notifyOnOk</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/alerts_v2#notify_on_ok DataDatabricksAlertsV2#notify_on_ok}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotification.property.retriggerSeconds">retriggerSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/alerts_v2#retrigger_seconds DataDatabricksAlertsV2#retrigger_seconds}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotification.property.subscriptions">subscriptions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions">DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/alerts_v2#subscriptions DataDatabricksAlertsV2#subscriptions}. |

---

##### `notifyOnOk`<sup>Optional</sup> <a name="notifyOnOk" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotification.property.notifyOnOk"></a>

```typescript
public readonly notifyOnOk: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/alerts_v2#notify_on_ok DataDatabricksAlertsV2#notify_on_ok}.

---

##### `retriggerSeconds`<sup>Optional</sup> <a name="retriggerSeconds" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotification.property.retriggerSeconds"></a>

```typescript
public readonly retriggerSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/alerts_v2#retrigger_seconds DataDatabricksAlertsV2#retrigger_seconds}.

---

##### `subscriptions`<sup>Optional</sup> <a name="subscriptions" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotification.property.subscriptions"></a>

```typescript
public readonly subscriptions: IResolvable | DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions">DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/alerts_v2#subscriptions DataDatabricksAlertsV2#subscriptions}.

---

### DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions <a name="DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions.Initializer"></a>

```typescript
import { dataDatabricksAlertsV2 } from '@cdktf/provider-databricks'

const dataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions: dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions.property.destinationId">destinationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/alerts_v2#destination_id DataDatabricksAlertsV2#destination_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions.property.userEmail">userEmail</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/alerts_v2#user_email DataDatabricksAlertsV2#user_email}. |

---

##### `destinationId`<sup>Optional</sup> <a name="destinationId" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions.property.destinationId"></a>

```typescript
public readonly destinationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/alerts_v2#destination_id DataDatabricksAlertsV2#destination_id}.

---

##### `userEmail`<sup>Optional</sup> <a name="userEmail" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions.property.userEmail"></a>

```typescript
public readonly userEmail: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/alerts_v2#user_email DataDatabricksAlertsV2#user_email}.

---

### DataDatabricksAlertsV2AlertsEvaluationSource <a name="DataDatabricksAlertsV2AlertsEvaluationSource" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSource.Initializer"></a>

```typescript
import { dataDatabricksAlertsV2 } from '@cdktf/provider-databricks'

const dataDatabricksAlertsV2AlertsEvaluationSource: dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSource.property.aggregation">aggregation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/alerts_v2#aggregation DataDatabricksAlertsV2#aggregation}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSource.property.display">display</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/alerts_v2#display DataDatabricksAlertsV2#display}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSource.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/alerts_v2#name DataDatabricksAlertsV2#name}. |

---

##### `aggregation`<sup>Optional</sup> <a name="aggregation" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSource.property.aggregation"></a>

```typescript
public readonly aggregation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/alerts_v2#aggregation DataDatabricksAlertsV2#aggregation}.

---

##### `display`<sup>Optional</sup> <a name="display" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSource.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/alerts_v2#display DataDatabricksAlertsV2#display}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSource.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/alerts_v2#name DataDatabricksAlertsV2#name}.

---

### DataDatabricksAlertsV2AlertsEvaluationThreshold <a name="DataDatabricksAlertsV2AlertsEvaluationThreshold" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThreshold.Initializer"></a>

```typescript
import { dataDatabricksAlertsV2 } from '@cdktf/provider-databricks'

const dataDatabricksAlertsV2AlertsEvaluationThreshold: dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThreshold = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThreshold.property.column">column</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumn">DataDatabricksAlertsV2AlertsEvaluationThresholdColumn</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/alerts_v2#column DataDatabricksAlertsV2#column}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThreshold.property.value">value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValue">DataDatabricksAlertsV2AlertsEvaluationThresholdValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/alerts_v2#value DataDatabricksAlertsV2#value}. |

---

##### `column`<sup>Optional</sup> <a name="column" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThreshold.property.column"></a>

```typescript
public readonly column: DataDatabricksAlertsV2AlertsEvaluationThresholdColumn;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumn">DataDatabricksAlertsV2AlertsEvaluationThresholdColumn</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/alerts_v2#column DataDatabricksAlertsV2#column}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThreshold.property.value"></a>

```typescript
public readonly value: DataDatabricksAlertsV2AlertsEvaluationThresholdValue;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValue">DataDatabricksAlertsV2AlertsEvaluationThresholdValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/alerts_v2#value DataDatabricksAlertsV2#value}.

---

### DataDatabricksAlertsV2AlertsEvaluationThresholdColumn <a name="DataDatabricksAlertsV2AlertsEvaluationThresholdColumn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumn.Initializer"></a>

```typescript
import { dataDatabricksAlertsV2 } from '@cdktf/provider-databricks'

const dataDatabricksAlertsV2AlertsEvaluationThresholdColumn: dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumn = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumn.property.aggregation">aggregation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/alerts_v2#aggregation DataDatabricksAlertsV2#aggregation}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumn.property.display">display</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/alerts_v2#display DataDatabricksAlertsV2#display}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumn.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/alerts_v2#name DataDatabricksAlertsV2#name}. |

---

##### `aggregation`<sup>Optional</sup> <a name="aggregation" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumn.property.aggregation"></a>

```typescript
public readonly aggregation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/alerts_v2#aggregation DataDatabricksAlertsV2#aggregation}.

---

##### `display`<sup>Optional</sup> <a name="display" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumn.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/alerts_v2#display DataDatabricksAlertsV2#display}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumn.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/alerts_v2#name DataDatabricksAlertsV2#name}.

---

### DataDatabricksAlertsV2AlertsEvaluationThresholdValue <a name="DataDatabricksAlertsV2AlertsEvaluationThresholdValue" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValue.Initializer"></a>

```typescript
import { dataDatabricksAlertsV2 } from '@cdktf/provider-databricks'

const dataDatabricksAlertsV2AlertsEvaluationThresholdValue: dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValue = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValue.property.boolValue">boolValue</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/alerts_v2#bool_value DataDatabricksAlertsV2#bool_value}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValue.property.doubleValue">doubleValue</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/alerts_v2#double_value DataDatabricksAlertsV2#double_value}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValue.property.stringValue">stringValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/alerts_v2#string_value DataDatabricksAlertsV2#string_value}. |

---

##### `boolValue`<sup>Optional</sup> <a name="boolValue" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValue.property.boolValue"></a>

```typescript
public readonly boolValue: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/alerts_v2#bool_value DataDatabricksAlertsV2#bool_value}.

---

##### `doubleValue`<sup>Optional</sup> <a name="doubleValue" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValue.property.doubleValue"></a>

```typescript
public readonly doubleValue: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/alerts_v2#double_value DataDatabricksAlertsV2#double_value}.

---

##### `stringValue`<sup>Optional</sup> <a name="stringValue" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValue.property.stringValue"></a>

```typescript
public readonly stringValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/alerts_v2#string_value DataDatabricksAlertsV2#string_value}.

---

### DataDatabricksAlertsV2AlertsRunAs <a name="DataDatabricksAlertsV2AlertsRunAs" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAs.Initializer"></a>

```typescript
import { dataDatabricksAlertsV2 } from '@cdktf/provider-databricks'

const dataDatabricksAlertsV2AlertsRunAs: dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAs.property.servicePrincipalName">servicePrincipalName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/alerts_v2#service_principal_name DataDatabricksAlertsV2#service_principal_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAs.property.userName">userName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/alerts_v2#user_name DataDatabricksAlertsV2#user_name}. |

---

##### `servicePrincipalName`<sup>Optional</sup> <a name="servicePrincipalName" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAs.property.servicePrincipalName"></a>

```typescript
public readonly servicePrincipalName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/alerts_v2#service_principal_name DataDatabricksAlertsV2#service_principal_name}.

---

##### `userName`<sup>Optional</sup> <a name="userName" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAs.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/alerts_v2#user_name DataDatabricksAlertsV2#user_name}.

---

### DataDatabricksAlertsV2AlertsSchedule <a name="DataDatabricksAlertsV2AlertsSchedule" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsSchedule.Initializer"></a>

```typescript
import { dataDatabricksAlertsV2 } from '@cdktf/provider-databricks'

const dataDatabricksAlertsV2AlertsSchedule: dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsSchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsSchedule.property.pauseStatus">pauseStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/alerts_v2#pause_status DataDatabricksAlertsV2#pause_status}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsSchedule.property.quartzCronSchedule">quartzCronSchedule</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/alerts_v2#quartz_cron_schedule DataDatabricksAlertsV2#quartz_cron_schedule}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsSchedule.property.timezoneId">timezoneId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/alerts_v2#timezone_id DataDatabricksAlertsV2#timezone_id}. |

---

##### `pauseStatus`<sup>Optional</sup> <a name="pauseStatus" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsSchedule.property.pauseStatus"></a>

```typescript
public readonly pauseStatus: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/alerts_v2#pause_status DataDatabricksAlertsV2#pause_status}.

---

##### `quartzCronSchedule`<sup>Optional</sup> <a name="quartzCronSchedule" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsSchedule.property.quartzCronSchedule"></a>

```typescript
public readonly quartzCronSchedule: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/alerts_v2#quartz_cron_schedule DataDatabricksAlertsV2#quartz_cron_schedule}.

---

##### `timezoneId`<sup>Optional</sup> <a name="timezoneId" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsSchedule.property.timezoneId"></a>

```typescript
public readonly timezoneId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/alerts_v2#timezone_id DataDatabricksAlertsV2#timezone_id}.

---

### DataDatabricksAlertsV2Config <a name="DataDatabricksAlertsV2Config" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config.Initializer"></a>

```typescript
import { dataDatabricksAlertsV2 } from '@cdktf/provider-databricks'

const dataDatabricksAlertsV2Config: dataDatabricksAlertsV2.DataDatabricksAlertsV2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config.property.pageSize">pageSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/alerts_v2#page_size DataDatabricksAlertsV2#page_size}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `pageSize`<sup>Optional</sup> <a name="pageSize" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config.property.pageSize"></a>

```typescript
public readonly pageSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/alerts_v2#page_size DataDatabricksAlertsV2#page_size}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference <a name="DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAlertsV2 } from '@cdktf/provider-databricks'

new dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.resetServicePrincipalName">resetServicePrincipalName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.resetUserName">resetUserName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetServicePrincipalName` <a name="resetServicePrincipalName" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.resetServicePrincipalName"></a>

```typescript
public resetServicePrincipalName(): void
```

##### `resetUserName` <a name="resetUserName" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.resetUserName"></a>

```typescript
public resetUserName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.property.servicePrincipalNameInput">servicePrincipalNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.property.userNameInput">userNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.property.servicePrincipalName">servicePrincipalName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.property.userName">userName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAs">DataDatabricksAlertsV2AlertsEffectiveRunAs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `servicePrincipalNameInput`<sup>Optional</sup> <a name="servicePrincipalNameInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.property.servicePrincipalNameInput"></a>

```typescript
public readonly servicePrincipalNameInput: string;
```

- *Type:* string

---

##### `userNameInput`<sup>Optional</sup> <a name="userNameInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.property.userNameInput"></a>

```typescript
public readonly userNameInput: string;
```

- *Type:* string

---

##### `servicePrincipalName`<sup>Required</sup> <a name="servicePrincipalName" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.property.servicePrincipalName"></a>

```typescript
public readonly servicePrincipalName: string;
```

- *Type:* string

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksAlertsV2AlertsEffectiveRunAs;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAs">DataDatabricksAlertsV2AlertsEffectiveRunAs</a>

---


### DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference <a name="DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAlertsV2 } from '@cdktf/provider-databricks'

new dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.putSubscriptions">putSubscriptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.resetNotifyOnOk">resetNotifyOnOk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.resetRetriggerSeconds">resetRetriggerSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.resetSubscriptions">resetSubscriptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSubscriptions` <a name="putSubscriptions" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.putSubscriptions"></a>

```typescript
public putSubscriptions(value: IResolvable | DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.putSubscriptions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions">DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions</a>[]

---

##### `resetNotifyOnOk` <a name="resetNotifyOnOk" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.resetNotifyOnOk"></a>

```typescript
public resetNotifyOnOk(): void
```

##### `resetRetriggerSeconds` <a name="resetRetriggerSeconds" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.resetRetriggerSeconds"></a>

```typescript
public resetRetriggerSeconds(): void
```

##### `resetSubscriptions` <a name="resetSubscriptions" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.resetSubscriptions"></a>

```typescript
public resetSubscriptions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.subscriptions">subscriptions</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList">DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.notifyOnOkInput">notifyOnOkInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.retriggerSecondsInput">retriggerSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.subscriptionsInput">subscriptionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions">DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.notifyOnOk">notifyOnOk</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.retriggerSeconds">retriggerSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotification">DataDatabricksAlertsV2AlertsEvaluationNotification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `subscriptions`<sup>Required</sup> <a name="subscriptions" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.subscriptions"></a>

```typescript
public readonly subscriptions: DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList">DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList</a>

---

##### `notifyOnOkInput`<sup>Optional</sup> <a name="notifyOnOkInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.notifyOnOkInput"></a>

```typescript
public readonly notifyOnOkInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `retriggerSecondsInput`<sup>Optional</sup> <a name="retriggerSecondsInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.retriggerSecondsInput"></a>

```typescript
public readonly retriggerSecondsInput: number;
```

- *Type:* number

---

##### `subscriptionsInput`<sup>Optional</sup> <a name="subscriptionsInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.subscriptionsInput"></a>

```typescript
public readonly subscriptionsInput: IResolvable | DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions">DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions</a>[]

---

##### `notifyOnOk`<sup>Required</sup> <a name="notifyOnOk" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.notifyOnOk"></a>

```typescript
public readonly notifyOnOk: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `retriggerSeconds`<sup>Required</sup> <a name="retriggerSeconds" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.retriggerSeconds"></a>

```typescript
public readonly retriggerSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAlertsV2AlertsEvaluationNotification;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotification">DataDatabricksAlertsV2AlertsEvaluationNotification</a>

---


### DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList <a name="DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.Initializer"></a>

```typescript
import { dataDatabricksAlertsV2 } from '@cdktf/provider-databricks'

new dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.get"></a>

```typescript
public get(index: number): DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions">DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions">DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions</a>[]

---


### DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference <a name="DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAlertsV2 } from '@cdktf/provider-databricks'

new dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.resetDestinationId">resetDestinationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.resetUserEmail">resetUserEmail</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDestinationId` <a name="resetDestinationId" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.resetDestinationId"></a>

```typescript
public resetDestinationId(): void
```

##### `resetUserEmail` <a name="resetUserEmail" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.resetUserEmail"></a>

```typescript
public resetUserEmail(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.property.destinationIdInput">destinationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.property.userEmailInput">userEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.property.destinationId">destinationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.property.userEmail">userEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions">DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationIdInput`<sup>Optional</sup> <a name="destinationIdInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.property.destinationIdInput"></a>

```typescript
public readonly destinationIdInput: string;
```

- *Type:* string

---

##### `userEmailInput`<sup>Optional</sup> <a name="userEmailInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.property.userEmailInput"></a>

```typescript
public readonly userEmailInput: string;
```

- *Type:* string

---

##### `destinationId`<sup>Required</sup> <a name="destinationId" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.property.destinationId"></a>

```typescript
public readonly destinationId: string;
```

- *Type:* string

---

##### `userEmail`<sup>Required</sup> <a name="userEmail" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.property.userEmail"></a>

```typescript
public readonly userEmail: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions">DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions</a>

---


### DataDatabricksAlertsV2AlertsEvaluationOutputReference <a name="DataDatabricksAlertsV2AlertsEvaluationOutputReference" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAlertsV2 } from '@cdktf/provider-databricks'

new dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.putNotification">putNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.putSource">putSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.putThreshold">putThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.resetComparisonOperator">resetComparisonOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.resetEmptyResultState">resetEmptyResultState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.resetNotification">resetNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.resetThreshold">resetThreshold</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNotification` <a name="putNotification" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.putNotification"></a>

```typescript
public putNotification(value: DataDatabricksAlertsV2AlertsEvaluationNotification): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.putNotification.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotification">DataDatabricksAlertsV2AlertsEvaluationNotification</a>

---

##### `putSource` <a name="putSource" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.putSource"></a>

```typescript
public putSource(value: DataDatabricksAlertsV2AlertsEvaluationSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSource">DataDatabricksAlertsV2AlertsEvaluationSource</a>

---

##### `putThreshold` <a name="putThreshold" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.putThreshold"></a>

```typescript
public putThreshold(value: DataDatabricksAlertsV2AlertsEvaluationThreshold): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.putThreshold.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThreshold">DataDatabricksAlertsV2AlertsEvaluationThreshold</a>

---

##### `resetComparisonOperator` <a name="resetComparisonOperator" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.resetComparisonOperator"></a>

```typescript
public resetComparisonOperator(): void
```

##### `resetEmptyResultState` <a name="resetEmptyResultState" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.resetEmptyResultState"></a>

```typescript
public resetEmptyResultState(): void
```

##### `resetNotification` <a name="resetNotification" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.resetNotification"></a>

```typescript
public resetNotification(): void
```

##### `resetSource` <a name="resetSource" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.resetSource"></a>

```typescript
public resetSource(): void
```

##### `resetThreshold` <a name="resetThreshold" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.resetThreshold"></a>

```typescript
public resetThreshold(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.lastEvaluatedAt">lastEvaluatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.notification">notification</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference">DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.source">source</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference">DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.threshold">threshold</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference">DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.comparisonOperatorInput">comparisonOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.emptyResultStateInput">emptyResultStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.notificationInput">notificationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotification">DataDatabricksAlertsV2AlertsEvaluationNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.sourceInput">sourceInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSource">DataDatabricksAlertsV2AlertsEvaluationSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.thresholdInput">thresholdInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThreshold">DataDatabricksAlertsV2AlertsEvaluationThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.comparisonOperator">comparisonOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.emptyResultState">emptyResultState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluation">DataDatabricksAlertsV2AlertsEvaluation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lastEvaluatedAt`<sup>Required</sup> <a name="lastEvaluatedAt" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.lastEvaluatedAt"></a>

```typescript
public readonly lastEvaluatedAt: string;
```

- *Type:* string

---

##### `notification`<sup>Required</sup> <a name="notification" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.notification"></a>

```typescript
public readonly notification: DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference">DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.source"></a>

```typescript
public readonly source: DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference">DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.threshold"></a>

```typescript
public readonly threshold: DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference">DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference</a>

---

##### `comparisonOperatorInput`<sup>Optional</sup> <a name="comparisonOperatorInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.comparisonOperatorInput"></a>

```typescript
public readonly comparisonOperatorInput: string;
```

- *Type:* string

---

##### `emptyResultStateInput`<sup>Optional</sup> <a name="emptyResultStateInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.emptyResultStateInput"></a>

```typescript
public readonly emptyResultStateInput: string;
```

- *Type:* string

---

##### `notificationInput`<sup>Optional</sup> <a name="notificationInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.notificationInput"></a>

```typescript
public readonly notificationInput: IResolvable | DataDatabricksAlertsV2AlertsEvaluationNotification;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotification">DataDatabricksAlertsV2AlertsEvaluationNotification</a>

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.sourceInput"></a>

```typescript
public readonly sourceInput: IResolvable | DataDatabricksAlertsV2AlertsEvaluationSource;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSource">DataDatabricksAlertsV2AlertsEvaluationSource</a>

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.thresholdInput"></a>

```typescript
public readonly thresholdInput: IResolvable | DataDatabricksAlertsV2AlertsEvaluationThreshold;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThreshold">DataDatabricksAlertsV2AlertsEvaluationThreshold</a>

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.comparisonOperator"></a>

```typescript
public readonly comparisonOperator: string;
```

- *Type:* string

---

##### `emptyResultState`<sup>Required</sup> <a name="emptyResultState" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.emptyResultState"></a>

```typescript
public readonly emptyResultState: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksAlertsV2AlertsEvaluation;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluation">DataDatabricksAlertsV2AlertsEvaluation</a>

---


### DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference <a name="DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAlertsV2 } from '@cdktf/provider-databricks'

new dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.resetAggregation">resetAggregation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.resetDisplay">resetDisplay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAggregation` <a name="resetAggregation" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.resetAggregation"></a>

```typescript
public resetAggregation(): void
```

##### `resetDisplay` <a name="resetDisplay" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.resetDisplay"></a>

```typescript
public resetDisplay(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.property.aggregationInput">aggregationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.property.displayInput">displayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.property.aggregation">aggregation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSource">DataDatabricksAlertsV2AlertsEvaluationSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aggregationInput`<sup>Optional</sup> <a name="aggregationInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.property.aggregationInput"></a>

```typescript
public readonly aggregationInput: string;
```

- *Type:* string

---

##### `displayInput`<sup>Optional</sup> <a name="displayInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.property.displayInput"></a>

```typescript
public readonly displayInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `aggregation`<sup>Required</sup> <a name="aggregation" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.property.aggregation"></a>

```typescript
public readonly aggregation: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAlertsV2AlertsEvaluationSource;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSource">DataDatabricksAlertsV2AlertsEvaluationSource</a>

---


### DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference <a name="DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAlertsV2 } from '@cdktf/provider-databricks'

new dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.resetAggregation">resetAggregation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.resetDisplay">resetDisplay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAggregation` <a name="resetAggregation" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.resetAggregation"></a>

```typescript
public resetAggregation(): void
```

##### `resetDisplay` <a name="resetDisplay" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.resetDisplay"></a>

```typescript
public resetDisplay(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.property.aggregationInput">aggregationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.property.displayInput">displayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.property.aggregation">aggregation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumn">DataDatabricksAlertsV2AlertsEvaluationThresholdColumn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aggregationInput`<sup>Optional</sup> <a name="aggregationInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.property.aggregationInput"></a>

```typescript
public readonly aggregationInput: string;
```

- *Type:* string

---

##### `displayInput`<sup>Optional</sup> <a name="displayInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.property.displayInput"></a>

```typescript
public readonly displayInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `aggregation`<sup>Required</sup> <a name="aggregation" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.property.aggregation"></a>

```typescript
public readonly aggregation: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAlertsV2AlertsEvaluationThresholdColumn;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumn">DataDatabricksAlertsV2AlertsEvaluationThresholdColumn</a>

---


### DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference <a name="DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAlertsV2 } from '@cdktf/provider-databricks'

new dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.putColumn">putColumn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.putValue">putValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.resetColumn">resetColumn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putColumn` <a name="putColumn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.putColumn"></a>

```typescript
public putColumn(value: DataDatabricksAlertsV2AlertsEvaluationThresholdColumn): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.putColumn.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumn">DataDatabricksAlertsV2AlertsEvaluationThresholdColumn</a>

---

##### `putValue` <a name="putValue" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.putValue"></a>

```typescript
public putValue(value: DataDatabricksAlertsV2AlertsEvaluationThresholdValue): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.putValue.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValue">DataDatabricksAlertsV2AlertsEvaluationThresholdValue</a>

---

##### `resetColumn` <a name="resetColumn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.resetColumn"></a>

```typescript
public resetColumn(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.property.column">column</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference">DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.property.value">value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference">DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.property.columnInput">columnInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumn">DataDatabricksAlertsV2AlertsEvaluationThresholdColumn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.property.valueInput">valueInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValue">DataDatabricksAlertsV2AlertsEvaluationThresholdValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThreshold">DataDatabricksAlertsV2AlertsEvaluationThreshold</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.property.column"></a>

```typescript
public readonly column: DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference">DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference</a>

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.property.value"></a>

```typescript
public readonly value: DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference">DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference</a>

---

##### `columnInput`<sup>Optional</sup> <a name="columnInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.property.columnInput"></a>

```typescript
public readonly columnInput: IResolvable | DataDatabricksAlertsV2AlertsEvaluationThresholdColumn;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumn">DataDatabricksAlertsV2AlertsEvaluationThresholdColumn</a>

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: IResolvable | DataDatabricksAlertsV2AlertsEvaluationThresholdValue;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValue">DataDatabricksAlertsV2AlertsEvaluationThresholdValue</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAlertsV2AlertsEvaluationThreshold;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThreshold">DataDatabricksAlertsV2AlertsEvaluationThreshold</a>

---


### DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference <a name="DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAlertsV2 } from '@cdktf/provider-databricks'

new dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.resetBoolValue">resetBoolValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.resetDoubleValue">resetDoubleValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.resetStringValue">resetStringValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBoolValue` <a name="resetBoolValue" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.resetBoolValue"></a>

```typescript
public resetBoolValue(): void
```

##### `resetDoubleValue` <a name="resetDoubleValue" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.resetDoubleValue"></a>

```typescript
public resetDoubleValue(): void
```

##### `resetStringValue` <a name="resetStringValue" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.resetStringValue"></a>

```typescript
public resetStringValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.property.boolValueInput">boolValueInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.property.doubleValueInput">doubleValueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.property.stringValueInput">stringValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.property.boolValue">boolValue</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.property.doubleValue">doubleValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.property.stringValue">stringValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValue">DataDatabricksAlertsV2AlertsEvaluationThresholdValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `boolValueInput`<sup>Optional</sup> <a name="boolValueInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.property.boolValueInput"></a>

```typescript
public readonly boolValueInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `doubleValueInput`<sup>Optional</sup> <a name="doubleValueInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.property.doubleValueInput"></a>

```typescript
public readonly doubleValueInput: number;
```

- *Type:* number

---

##### `stringValueInput`<sup>Optional</sup> <a name="stringValueInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.property.stringValueInput"></a>

```typescript
public readonly stringValueInput: string;
```

- *Type:* string

---

##### `boolValue`<sup>Required</sup> <a name="boolValue" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.property.boolValue"></a>

```typescript
public readonly boolValue: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `doubleValue`<sup>Required</sup> <a name="doubleValue" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.property.doubleValue"></a>

```typescript
public readonly doubleValue: number;
```

- *Type:* number

---

##### `stringValue`<sup>Required</sup> <a name="stringValue" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.property.stringValue"></a>

```typescript
public readonly stringValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAlertsV2AlertsEvaluationThresholdValue;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValue">DataDatabricksAlertsV2AlertsEvaluationThresholdValue</a>

---


### DataDatabricksAlertsV2AlertsList <a name="DataDatabricksAlertsV2AlertsList" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.Initializer"></a>

```typescript
import { dataDatabricksAlertsV2 } from '@cdktf/provider-databricks'

new dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.get"></a>

```typescript
public get(index: number): DataDatabricksAlertsV2AlertsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Alerts">DataDatabricksAlertsV2Alerts</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAlertsV2Alerts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Alerts">DataDatabricksAlertsV2Alerts</a>[]

---


### DataDatabricksAlertsV2AlertsOutputReference <a name="DataDatabricksAlertsV2AlertsOutputReference" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAlertsV2 } from '@cdktf/provider-databricks'

new dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.customDescription">customDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.customSummary">customSummary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.effectiveRunAs">effectiveRunAs</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference">DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.evaluation">evaluation</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference">DataDatabricksAlertsV2AlertsEvaluationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.lifecycleState">lifecycleState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.ownerUserName">ownerUserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.parentPath">parentPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.queryText">queryText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.runAs">runAs</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference">DataDatabricksAlertsV2AlertsRunAsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.runAsUserName">runAsUserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference">DataDatabricksAlertsV2AlertsScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.warehouseId">warehouseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Alerts">DataDatabricksAlertsV2Alerts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `customDescription`<sup>Required</sup> <a name="customDescription" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.customDescription"></a>

```typescript
public readonly customDescription: string;
```

- *Type:* string

---

##### `customSummary`<sup>Required</sup> <a name="customSummary" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.customSummary"></a>

```typescript
public readonly customSummary: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `effectiveRunAs`<sup>Required</sup> <a name="effectiveRunAs" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.effectiveRunAs"></a>

```typescript
public readonly effectiveRunAs: DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference">DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference</a>

---

##### `evaluation`<sup>Required</sup> <a name="evaluation" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.evaluation"></a>

```typescript
public readonly evaluation: DataDatabricksAlertsV2AlertsEvaluationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference">DataDatabricksAlertsV2AlertsEvaluationOutputReference</a>

---

##### `lifecycleState`<sup>Required</sup> <a name="lifecycleState" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.lifecycleState"></a>

```typescript
public readonly lifecycleState: string;
```

- *Type:* string

---

##### `ownerUserName`<sup>Required</sup> <a name="ownerUserName" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.ownerUserName"></a>

```typescript
public readonly ownerUserName: string;
```

- *Type:* string

---

##### `parentPath`<sup>Required</sup> <a name="parentPath" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.parentPath"></a>

```typescript
public readonly parentPath: string;
```

- *Type:* string

---

##### `queryText`<sup>Required</sup> <a name="queryText" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.queryText"></a>

```typescript
public readonly queryText: string;
```

- *Type:* string

---

##### `runAs`<sup>Required</sup> <a name="runAs" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.runAs"></a>

```typescript
public readonly runAs: DataDatabricksAlertsV2AlertsRunAsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference">DataDatabricksAlertsV2AlertsRunAsOutputReference</a>

---

##### `runAsUserName`<sup>Required</sup> <a name="runAsUserName" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.runAsUserName"></a>

```typescript
public readonly runAsUserName: string;
```

- *Type:* string

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.schedule"></a>

```typescript
public readonly schedule: DataDatabricksAlertsV2AlertsScheduleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference">DataDatabricksAlertsV2AlertsScheduleOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `warehouseId`<sup>Required</sup> <a name="warehouseId" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.warehouseId"></a>

```typescript
public readonly warehouseId: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksAlertsV2Alerts;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Alerts">DataDatabricksAlertsV2Alerts</a>

---


### DataDatabricksAlertsV2AlertsRunAsOutputReference <a name="DataDatabricksAlertsV2AlertsRunAsOutputReference" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAlertsV2 } from '@cdktf/provider-databricks'

new dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.resetServicePrincipalName">resetServicePrincipalName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.resetUserName">resetUserName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetServicePrincipalName` <a name="resetServicePrincipalName" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.resetServicePrincipalName"></a>

```typescript
public resetServicePrincipalName(): void
```

##### `resetUserName` <a name="resetUserName" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.resetUserName"></a>

```typescript
public resetUserName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.property.servicePrincipalNameInput">servicePrincipalNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.property.userNameInput">userNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.property.servicePrincipalName">servicePrincipalName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.property.userName">userName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAs">DataDatabricksAlertsV2AlertsRunAs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `servicePrincipalNameInput`<sup>Optional</sup> <a name="servicePrincipalNameInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.property.servicePrincipalNameInput"></a>

```typescript
public readonly servicePrincipalNameInput: string;
```

- *Type:* string

---

##### `userNameInput`<sup>Optional</sup> <a name="userNameInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.property.userNameInput"></a>

```typescript
public readonly userNameInput: string;
```

- *Type:* string

---

##### `servicePrincipalName`<sup>Required</sup> <a name="servicePrincipalName" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.property.servicePrincipalName"></a>

```typescript
public readonly servicePrincipalName: string;
```

- *Type:* string

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksAlertsV2AlertsRunAs;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAs">DataDatabricksAlertsV2AlertsRunAs</a>

---


### DataDatabricksAlertsV2AlertsScheduleOutputReference <a name="DataDatabricksAlertsV2AlertsScheduleOutputReference" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAlertsV2 } from '@cdktf/provider-databricks'

new dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.resetPauseStatus">resetPauseStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.resetQuartzCronSchedule">resetQuartzCronSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.resetTimezoneId">resetTimezoneId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPauseStatus` <a name="resetPauseStatus" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.resetPauseStatus"></a>

```typescript
public resetPauseStatus(): void
```

##### `resetQuartzCronSchedule` <a name="resetQuartzCronSchedule" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.resetQuartzCronSchedule"></a>

```typescript
public resetQuartzCronSchedule(): void
```

##### `resetTimezoneId` <a name="resetTimezoneId" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.resetTimezoneId"></a>

```typescript
public resetTimezoneId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.property.pauseStatusInput">pauseStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.property.quartzCronScheduleInput">quartzCronScheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.property.timezoneIdInput">timezoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.property.pauseStatus">pauseStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.property.quartzCronSchedule">quartzCronSchedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.property.timezoneId">timezoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsSchedule">DataDatabricksAlertsV2AlertsSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pauseStatusInput`<sup>Optional</sup> <a name="pauseStatusInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.property.pauseStatusInput"></a>

```typescript
public readonly pauseStatusInput: string;
```

- *Type:* string

---

##### `quartzCronScheduleInput`<sup>Optional</sup> <a name="quartzCronScheduleInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.property.quartzCronScheduleInput"></a>

```typescript
public readonly quartzCronScheduleInput: string;
```

- *Type:* string

---

##### `timezoneIdInput`<sup>Optional</sup> <a name="timezoneIdInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.property.timezoneIdInput"></a>

```typescript
public readonly timezoneIdInput: string;
```

- *Type:* string

---

##### `pauseStatus`<sup>Required</sup> <a name="pauseStatus" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.property.pauseStatus"></a>

```typescript
public readonly pauseStatus: string;
```

- *Type:* string

---

##### `quartzCronSchedule`<sup>Required</sup> <a name="quartzCronSchedule" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.property.quartzCronSchedule"></a>

```typescript
public readonly quartzCronSchedule: string;
```

- *Type:* string

---

##### `timezoneId`<sup>Required</sup> <a name="timezoneId" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.property.timezoneId"></a>

```typescript
public readonly timezoneId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksAlertsV2AlertsSchedule;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsSchedule">DataDatabricksAlertsV2AlertsSchedule</a>

---



