# `dataDatabricksAlertsV2` Submodule <a name="`dataDatabricksAlertsV2` Submodule" id="@cdktf/provider-databricks.dataDatabricksAlertsV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAlertsV2 <a name="DataDatabricksAlertsV2" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alerts_v2 databricks_alerts_v2}.

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

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alerts_v2#import import section} in the documentation of this resource for the id to use

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
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.results">results</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsList">DataDatabricksAlertsV2ResultsList</a></code> | *No description.* |

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

##### `results`<sup>Required</sup> <a name="results" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.results"></a>

```typescript
public readonly results: DataDatabricksAlertsV2ResultsList;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsList">DataDatabricksAlertsV2ResultsList</a>

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
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

### DataDatabricksAlertsV2Results <a name="DataDatabricksAlertsV2Results" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Results"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Results.Initializer"></a>

```typescript
import { dataDatabricksAlertsV2 } from '@cdktf/provider-databricks'

const dataDatabricksAlertsV2Results: dataDatabricksAlertsV2.DataDatabricksAlertsV2Results = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Results.property.customDescription">customDescription</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alerts_v2#custom_description DataDatabricksAlertsV2#custom_description}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Results.property.customSummary">customSummary</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alerts_v2#custom_summary DataDatabricksAlertsV2#custom_summary}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Results.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alerts_v2#display_name DataDatabricksAlertsV2#display_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Results.property.evaluation">evaluation</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluation">DataDatabricksAlertsV2ResultsEvaluation</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alerts_v2#evaluation DataDatabricksAlertsV2#evaluation}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Results.property.parentPath">parentPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alerts_v2#parent_path DataDatabricksAlertsV2#parent_path}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Results.property.queryText">queryText</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alerts_v2#query_text DataDatabricksAlertsV2#query_text}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Results.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsSchedule">DataDatabricksAlertsV2ResultsSchedule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alerts_v2#schedule DataDatabricksAlertsV2#schedule}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Results.property.warehouseId">warehouseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alerts_v2#warehouse_id DataDatabricksAlertsV2#warehouse_id}. |

---

##### `customDescription`<sup>Optional</sup> <a name="customDescription" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Results.property.customDescription"></a>

```typescript
public readonly customDescription: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alerts_v2#custom_description DataDatabricksAlertsV2#custom_description}.

---

##### `customSummary`<sup>Optional</sup> <a name="customSummary" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Results.property.customSummary"></a>

```typescript
public readonly customSummary: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alerts_v2#custom_summary DataDatabricksAlertsV2#custom_summary}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Results.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alerts_v2#display_name DataDatabricksAlertsV2#display_name}.

---

##### `evaluation`<sup>Optional</sup> <a name="evaluation" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Results.property.evaluation"></a>

```typescript
public readonly evaluation: DataDatabricksAlertsV2ResultsEvaluation;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluation">DataDatabricksAlertsV2ResultsEvaluation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alerts_v2#evaluation DataDatabricksAlertsV2#evaluation}.

---

##### `parentPath`<sup>Optional</sup> <a name="parentPath" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Results.property.parentPath"></a>

```typescript
public readonly parentPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alerts_v2#parent_path DataDatabricksAlertsV2#parent_path}.

---

##### `queryText`<sup>Optional</sup> <a name="queryText" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Results.property.queryText"></a>

```typescript
public readonly queryText: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alerts_v2#query_text DataDatabricksAlertsV2#query_text}.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Results.property.schedule"></a>

```typescript
public readonly schedule: DataDatabricksAlertsV2ResultsSchedule;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsSchedule">DataDatabricksAlertsV2ResultsSchedule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alerts_v2#schedule DataDatabricksAlertsV2#schedule}.

---

##### `warehouseId`<sup>Optional</sup> <a name="warehouseId" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Results.property.warehouseId"></a>

```typescript
public readonly warehouseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alerts_v2#warehouse_id DataDatabricksAlertsV2#warehouse_id}.

---

### DataDatabricksAlertsV2ResultsEvaluation <a name="DataDatabricksAlertsV2ResultsEvaluation" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluation.Initializer"></a>

```typescript
import { dataDatabricksAlertsV2 } from '@cdktf/provider-databricks'

const dataDatabricksAlertsV2ResultsEvaluation: dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluation.property.comparisonOperator">comparisonOperator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alerts_v2#comparison_operator DataDatabricksAlertsV2#comparison_operator}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluation.property.emptyResultState">emptyResultState</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alerts_v2#empty_result_state DataDatabricksAlertsV2#empty_result_state}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluation.property.notification">notification</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotification">DataDatabricksAlertsV2ResultsEvaluationNotification</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alerts_v2#notification DataDatabricksAlertsV2#notification}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluation.property.source">source</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSource">DataDatabricksAlertsV2ResultsEvaluationSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alerts_v2#source DataDatabricksAlertsV2#source}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluation.property.threshold">threshold</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThreshold">DataDatabricksAlertsV2ResultsEvaluationThreshold</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alerts_v2#threshold DataDatabricksAlertsV2#threshold}. |

---

##### `comparisonOperator`<sup>Optional</sup> <a name="comparisonOperator" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluation.property.comparisonOperator"></a>

```typescript
public readonly comparisonOperator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alerts_v2#comparison_operator DataDatabricksAlertsV2#comparison_operator}.

---

##### `emptyResultState`<sup>Optional</sup> <a name="emptyResultState" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluation.property.emptyResultState"></a>

```typescript
public readonly emptyResultState: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alerts_v2#empty_result_state DataDatabricksAlertsV2#empty_result_state}.

---

##### `notification`<sup>Optional</sup> <a name="notification" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluation.property.notification"></a>

```typescript
public readonly notification: DataDatabricksAlertsV2ResultsEvaluationNotification;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotification">DataDatabricksAlertsV2ResultsEvaluationNotification</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alerts_v2#notification DataDatabricksAlertsV2#notification}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluation.property.source"></a>

```typescript
public readonly source: DataDatabricksAlertsV2ResultsEvaluationSource;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSource">DataDatabricksAlertsV2ResultsEvaluationSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alerts_v2#source DataDatabricksAlertsV2#source}.

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluation.property.threshold"></a>

```typescript
public readonly threshold: DataDatabricksAlertsV2ResultsEvaluationThreshold;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThreshold">DataDatabricksAlertsV2ResultsEvaluationThreshold</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alerts_v2#threshold DataDatabricksAlertsV2#threshold}.

---

### DataDatabricksAlertsV2ResultsEvaluationNotification <a name="DataDatabricksAlertsV2ResultsEvaluationNotification" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotification.Initializer"></a>

```typescript
import { dataDatabricksAlertsV2 } from '@cdktf/provider-databricks'

const dataDatabricksAlertsV2ResultsEvaluationNotification: dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotification = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotification.property.notifyOnOk">notifyOnOk</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alerts_v2#notify_on_ok DataDatabricksAlertsV2#notify_on_ok}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotification.property.retriggerSeconds">retriggerSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alerts_v2#retrigger_seconds DataDatabricksAlertsV2#retrigger_seconds}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotification.property.subscriptions">subscriptions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptions">DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptions</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alerts_v2#subscriptions DataDatabricksAlertsV2#subscriptions}. |

---

##### `notifyOnOk`<sup>Optional</sup> <a name="notifyOnOk" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotification.property.notifyOnOk"></a>

```typescript
public readonly notifyOnOk: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alerts_v2#notify_on_ok DataDatabricksAlertsV2#notify_on_ok}.

---

##### `retriggerSeconds`<sup>Optional</sup> <a name="retriggerSeconds" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotification.property.retriggerSeconds"></a>

```typescript
public readonly retriggerSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alerts_v2#retrigger_seconds DataDatabricksAlertsV2#retrigger_seconds}.

---

##### `subscriptions`<sup>Optional</sup> <a name="subscriptions" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotification.property.subscriptions"></a>

```typescript
public readonly subscriptions: IResolvable | DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptions">DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptions</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alerts_v2#subscriptions DataDatabricksAlertsV2#subscriptions}.

---

### DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptions <a name="DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptions" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptions.Initializer"></a>

```typescript
import { dataDatabricksAlertsV2 } from '@cdktf/provider-databricks'

const dataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptions: dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptions.property.destinationId">destinationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alerts_v2#destination_id DataDatabricksAlertsV2#destination_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptions.property.userEmail">userEmail</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alerts_v2#user_email DataDatabricksAlertsV2#user_email}. |

---

##### `destinationId`<sup>Optional</sup> <a name="destinationId" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptions.property.destinationId"></a>

```typescript
public readonly destinationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alerts_v2#destination_id DataDatabricksAlertsV2#destination_id}.

---

##### `userEmail`<sup>Optional</sup> <a name="userEmail" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptions.property.userEmail"></a>

```typescript
public readonly userEmail: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alerts_v2#user_email DataDatabricksAlertsV2#user_email}.

---

### DataDatabricksAlertsV2ResultsEvaluationSource <a name="DataDatabricksAlertsV2ResultsEvaluationSource" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSource.Initializer"></a>

```typescript
import { dataDatabricksAlertsV2 } from '@cdktf/provider-databricks'

const dataDatabricksAlertsV2ResultsEvaluationSource: dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSource.property.aggregation">aggregation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alerts_v2#aggregation DataDatabricksAlertsV2#aggregation}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSource.property.display">display</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alerts_v2#display DataDatabricksAlertsV2#display}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSource.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alerts_v2#name DataDatabricksAlertsV2#name}. |

---

##### `aggregation`<sup>Optional</sup> <a name="aggregation" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSource.property.aggregation"></a>

```typescript
public readonly aggregation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alerts_v2#aggregation DataDatabricksAlertsV2#aggregation}.

---

##### `display`<sup>Optional</sup> <a name="display" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSource.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alerts_v2#display DataDatabricksAlertsV2#display}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSource.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alerts_v2#name DataDatabricksAlertsV2#name}.

---

### DataDatabricksAlertsV2ResultsEvaluationThreshold <a name="DataDatabricksAlertsV2ResultsEvaluationThreshold" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThreshold.Initializer"></a>

```typescript
import { dataDatabricksAlertsV2 } from '@cdktf/provider-databricks'

const dataDatabricksAlertsV2ResultsEvaluationThreshold: dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThreshold = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThreshold.property.column">column</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumn">DataDatabricksAlertsV2ResultsEvaluationThresholdColumn</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alerts_v2#column DataDatabricksAlertsV2#column}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThreshold.property.value">value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValue">DataDatabricksAlertsV2ResultsEvaluationThresholdValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alerts_v2#value DataDatabricksAlertsV2#value}. |

---

##### `column`<sup>Optional</sup> <a name="column" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThreshold.property.column"></a>

```typescript
public readonly column: DataDatabricksAlertsV2ResultsEvaluationThresholdColumn;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumn">DataDatabricksAlertsV2ResultsEvaluationThresholdColumn</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alerts_v2#column DataDatabricksAlertsV2#column}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThreshold.property.value"></a>

```typescript
public readonly value: DataDatabricksAlertsV2ResultsEvaluationThresholdValue;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValue">DataDatabricksAlertsV2ResultsEvaluationThresholdValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alerts_v2#value DataDatabricksAlertsV2#value}.

---

### DataDatabricksAlertsV2ResultsEvaluationThresholdColumn <a name="DataDatabricksAlertsV2ResultsEvaluationThresholdColumn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumn.Initializer"></a>

```typescript
import { dataDatabricksAlertsV2 } from '@cdktf/provider-databricks'

const dataDatabricksAlertsV2ResultsEvaluationThresholdColumn: dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumn = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumn.property.aggregation">aggregation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alerts_v2#aggregation DataDatabricksAlertsV2#aggregation}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumn.property.display">display</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alerts_v2#display DataDatabricksAlertsV2#display}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumn.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alerts_v2#name DataDatabricksAlertsV2#name}. |

---

##### `aggregation`<sup>Optional</sup> <a name="aggregation" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumn.property.aggregation"></a>

```typescript
public readonly aggregation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alerts_v2#aggregation DataDatabricksAlertsV2#aggregation}.

---

##### `display`<sup>Optional</sup> <a name="display" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumn.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alerts_v2#display DataDatabricksAlertsV2#display}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumn.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alerts_v2#name DataDatabricksAlertsV2#name}.

---

### DataDatabricksAlertsV2ResultsEvaluationThresholdValue <a name="DataDatabricksAlertsV2ResultsEvaluationThresholdValue" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValue.Initializer"></a>

```typescript
import { dataDatabricksAlertsV2 } from '@cdktf/provider-databricks'

const dataDatabricksAlertsV2ResultsEvaluationThresholdValue: dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValue = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValue.property.boolValue">boolValue</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alerts_v2#bool_value DataDatabricksAlertsV2#bool_value}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValue.property.doubleValue">doubleValue</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alerts_v2#double_value DataDatabricksAlertsV2#double_value}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValue.property.stringValue">stringValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alerts_v2#string_value DataDatabricksAlertsV2#string_value}. |

---

##### `boolValue`<sup>Optional</sup> <a name="boolValue" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValue.property.boolValue"></a>

```typescript
public readonly boolValue: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alerts_v2#bool_value DataDatabricksAlertsV2#bool_value}.

---

##### `doubleValue`<sup>Optional</sup> <a name="doubleValue" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValue.property.doubleValue"></a>

```typescript
public readonly doubleValue: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alerts_v2#double_value DataDatabricksAlertsV2#double_value}.

---

##### `stringValue`<sup>Optional</sup> <a name="stringValue" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValue.property.stringValue"></a>

```typescript
public readonly stringValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alerts_v2#string_value DataDatabricksAlertsV2#string_value}.

---

### DataDatabricksAlertsV2ResultsSchedule <a name="DataDatabricksAlertsV2ResultsSchedule" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsSchedule.Initializer"></a>

```typescript
import { dataDatabricksAlertsV2 } from '@cdktf/provider-databricks'

const dataDatabricksAlertsV2ResultsSchedule: dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsSchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsSchedule.property.pauseStatus">pauseStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alerts_v2#pause_status DataDatabricksAlertsV2#pause_status}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsSchedule.property.quartzCronSchedule">quartzCronSchedule</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alerts_v2#quartz_cron_schedule DataDatabricksAlertsV2#quartz_cron_schedule}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsSchedule.property.timezoneId">timezoneId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alerts_v2#timezone_id DataDatabricksAlertsV2#timezone_id}. |

---

##### `pauseStatus`<sup>Optional</sup> <a name="pauseStatus" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsSchedule.property.pauseStatus"></a>

```typescript
public readonly pauseStatus: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alerts_v2#pause_status DataDatabricksAlertsV2#pause_status}.

---

##### `quartzCronSchedule`<sup>Optional</sup> <a name="quartzCronSchedule" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsSchedule.property.quartzCronSchedule"></a>

```typescript
public readonly quartzCronSchedule: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alerts_v2#quartz_cron_schedule DataDatabricksAlertsV2#quartz_cron_schedule}.

---

##### `timezoneId`<sup>Optional</sup> <a name="timezoneId" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsSchedule.property.timezoneId"></a>

```typescript
public readonly timezoneId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alerts_v2#timezone_id DataDatabricksAlertsV2#timezone_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference <a name="DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAlertsV2 } from '@cdktf/provider-databricks'

new dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.putSubscriptions">putSubscriptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.resetNotifyOnOk">resetNotifyOnOk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.resetRetriggerSeconds">resetRetriggerSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.resetSubscriptions">resetSubscriptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSubscriptions` <a name="putSubscriptions" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.putSubscriptions"></a>

```typescript
public putSubscriptions(value: IResolvable | DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.putSubscriptions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptions">DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptions</a>[]

---

##### `resetNotifyOnOk` <a name="resetNotifyOnOk" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.resetNotifyOnOk"></a>

```typescript
public resetNotifyOnOk(): void
```

##### `resetRetriggerSeconds` <a name="resetRetriggerSeconds" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.resetRetriggerSeconds"></a>

```typescript
public resetRetriggerSeconds(): void
```

##### `resetSubscriptions` <a name="resetSubscriptions" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.resetSubscriptions"></a>

```typescript
public resetSubscriptions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.property.subscriptions">subscriptions</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsList">DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.property.notifyOnOkInput">notifyOnOkInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.property.retriggerSecondsInput">retriggerSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.property.subscriptionsInput">subscriptionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptions">DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.property.notifyOnOk">notifyOnOk</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.property.retriggerSeconds">retriggerSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotification">DataDatabricksAlertsV2ResultsEvaluationNotification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `subscriptions`<sup>Required</sup> <a name="subscriptions" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.property.subscriptions"></a>

```typescript
public readonly subscriptions: DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsList;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsList">DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsList</a>

---

##### `notifyOnOkInput`<sup>Optional</sup> <a name="notifyOnOkInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.property.notifyOnOkInput"></a>

```typescript
public readonly notifyOnOkInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `retriggerSecondsInput`<sup>Optional</sup> <a name="retriggerSecondsInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.property.retriggerSecondsInput"></a>

```typescript
public readonly retriggerSecondsInput: number;
```

- *Type:* number

---

##### `subscriptionsInput`<sup>Optional</sup> <a name="subscriptionsInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.property.subscriptionsInput"></a>

```typescript
public readonly subscriptionsInput: IResolvable | DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptions">DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptions</a>[]

---

##### `notifyOnOk`<sup>Required</sup> <a name="notifyOnOk" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.property.notifyOnOk"></a>

```typescript
public readonly notifyOnOk: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `retriggerSeconds`<sup>Required</sup> <a name="retriggerSeconds" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.property.retriggerSeconds"></a>

```typescript
public readonly retriggerSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAlertsV2ResultsEvaluationNotification;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotification">DataDatabricksAlertsV2ResultsEvaluationNotification</a>

---


### DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsList <a name="DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsList" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsList.Initializer"></a>

```typescript
import { dataDatabricksAlertsV2 } from '@cdktf/provider-databricks'

new dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsList.get"></a>

```typescript
public get(index: number): DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptions">DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptions">DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptions</a>[]

---


### DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference <a name="DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAlertsV2 } from '@cdktf/provider-databricks'

new dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.resetDestinationId">resetDestinationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.resetUserEmail">resetUserEmail</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDestinationId` <a name="resetDestinationId" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.resetDestinationId"></a>

```typescript
public resetDestinationId(): void
```

##### `resetUserEmail` <a name="resetUserEmail" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.resetUserEmail"></a>

```typescript
public resetUserEmail(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.property.destinationIdInput">destinationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.property.userEmailInput">userEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.property.destinationId">destinationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.property.userEmail">userEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptions">DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationIdInput`<sup>Optional</sup> <a name="destinationIdInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.property.destinationIdInput"></a>

```typescript
public readonly destinationIdInput: string;
```

- *Type:* string

---

##### `userEmailInput`<sup>Optional</sup> <a name="userEmailInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.property.userEmailInput"></a>

```typescript
public readonly userEmailInput: string;
```

- *Type:* string

---

##### `destinationId`<sup>Required</sup> <a name="destinationId" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.property.destinationId"></a>

```typescript
public readonly destinationId: string;
```

- *Type:* string

---

##### `userEmail`<sup>Required</sup> <a name="userEmail" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.property.userEmail"></a>

```typescript
public readonly userEmail: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptions">DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptions</a>

---


### DataDatabricksAlertsV2ResultsEvaluationOutputReference <a name="DataDatabricksAlertsV2ResultsEvaluationOutputReference" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAlertsV2 } from '@cdktf/provider-databricks'

new dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.putNotification">putNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.putSource">putSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.putThreshold">putThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.resetComparisonOperator">resetComparisonOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.resetEmptyResultState">resetEmptyResultState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.resetNotification">resetNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.resetThreshold">resetThreshold</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNotification` <a name="putNotification" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.putNotification"></a>

```typescript
public putNotification(value: DataDatabricksAlertsV2ResultsEvaluationNotification): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.putNotification.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotification">DataDatabricksAlertsV2ResultsEvaluationNotification</a>

---

##### `putSource` <a name="putSource" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.putSource"></a>

```typescript
public putSource(value: DataDatabricksAlertsV2ResultsEvaluationSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSource">DataDatabricksAlertsV2ResultsEvaluationSource</a>

---

##### `putThreshold` <a name="putThreshold" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.putThreshold"></a>

```typescript
public putThreshold(value: DataDatabricksAlertsV2ResultsEvaluationThreshold): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.putThreshold.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThreshold">DataDatabricksAlertsV2ResultsEvaluationThreshold</a>

---

##### `resetComparisonOperator` <a name="resetComparisonOperator" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.resetComparisonOperator"></a>

```typescript
public resetComparisonOperator(): void
```

##### `resetEmptyResultState` <a name="resetEmptyResultState" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.resetEmptyResultState"></a>

```typescript
public resetEmptyResultState(): void
```

##### `resetNotification` <a name="resetNotification" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.resetNotification"></a>

```typescript
public resetNotification(): void
```

##### `resetSource` <a name="resetSource" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.resetSource"></a>

```typescript
public resetSource(): void
```

##### `resetThreshold` <a name="resetThreshold" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.resetThreshold"></a>

```typescript
public resetThreshold(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.property.lastEvaluatedAt">lastEvaluatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.property.notification">notification</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference">DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.property.source">source</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference">DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.property.threshold">threshold</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference">DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.property.comparisonOperatorInput">comparisonOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.property.emptyResultStateInput">emptyResultStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.property.notificationInput">notificationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotification">DataDatabricksAlertsV2ResultsEvaluationNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.property.sourceInput">sourceInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSource">DataDatabricksAlertsV2ResultsEvaluationSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.property.thresholdInput">thresholdInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThreshold">DataDatabricksAlertsV2ResultsEvaluationThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.property.comparisonOperator">comparisonOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.property.emptyResultState">emptyResultState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluation">DataDatabricksAlertsV2ResultsEvaluation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lastEvaluatedAt`<sup>Required</sup> <a name="lastEvaluatedAt" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.property.lastEvaluatedAt"></a>

```typescript
public readonly lastEvaluatedAt: string;
```

- *Type:* string

---

##### `notification`<sup>Required</sup> <a name="notification" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.property.notification"></a>

```typescript
public readonly notification: DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference">DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.property.source"></a>

```typescript
public readonly source: DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference">DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.property.threshold"></a>

```typescript
public readonly threshold: DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference">DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference</a>

---

##### `comparisonOperatorInput`<sup>Optional</sup> <a name="comparisonOperatorInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.property.comparisonOperatorInput"></a>

```typescript
public readonly comparisonOperatorInput: string;
```

- *Type:* string

---

##### `emptyResultStateInput`<sup>Optional</sup> <a name="emptyResultStateInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.property.emptyResultStateInput"></a>

```typescript
public readonly emptyResultStateInput: string;
```

- *Type:* string

---

##### `notificationInput`<sup>Optional</sup> <a name="notificationInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.property.notificationInput"></a>

```typescript
public readonly notificationInput: IResolvable | DataDatabricksAlertsV2ResultsEvaluationNotification;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotification">DataDatabricksAlertsV2ResultsEvaluationNotification</a>

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.property.sourceInput"></a>

```typescript
public readonly sourceInput: IResolvable | DataDatabricksAlertsV2ResultsEvaluationSource;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSource">DataDatabricksAlertsV2ResultsEvaluationSource</a>

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.property.thresholdInput"></a>

```typescript
public readonly thresholdInput: IResolvable | DataDatabricksAlertsV2ResultsEvaluationThreshold;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThreshold">DataDatabricksAlertsV2ResultsEvaluationThreshold</a>

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.property.comparisonOperator"></a>

```typescript
public readonly comparisonOperator: string;
```

- *Type:* string

---

##### `emptyResultState`<sup>Required</sup> <a name="emptyResultState" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.property.emptyResultState"></a>

```typescript
public readonly emptyResultState: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAlertsV2ResultsEvaluation;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluation">DataDatabricksAlertsV2ResultsEvaluation</a>

---


### DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference <a name="DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAlertsV2 } from '@cdktf/provider-databricks'

new dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.resetAggregation">resetAggregation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.resetDisplay">resetDisplay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAggregation` <a name="resetAggregation" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.resetAggregation"></a>

```typescript
public resetAggregation(): void
```

##### `resetDisplay` <a name="resetDisplay" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.resetDisplay"></a>

```typescript
public resetDisplay(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.property.aggregationInput">aggregationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.property.displayInput">displayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.property.aggregation">aggregation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSource">DataDatabricksAlertsV2ResultsEvaluationSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aggregationInput`<sup>Optional</sup> <a name="aggregationInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.property.aggregationInput"></a>

```typescript
public readonly aggregationInput: string;
```

- *Type:* string

---

##### `displayInput`<sup>Optional</sup> <a name="displayInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.property.displayInput"></a>

```typescript
public readonly displayInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `aggregation`<sup>Required</sup> <a name="aggregation" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.property.aggregation"></a>

```typescript
public readonly aggregation: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAlertsV2ResultsEvaluationSource;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSource">DataDatabricksAlertsV2ResultsEvaluationSource</a>

---


### DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference <a name="DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAlertsV2 } from '@cdktf/provider-databricks'

new dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.resetAggregation">resetAggregation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.resetDisplay">resetDisplay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAggregation` <a name="resetAggregation" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.resetAggregation"></a>

```typescript
public resetAggregation(): void
```

##### `resetDisplay` <a name="resetDisplay" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.resetDisplay"></a>

```typescript
public resetDisplay(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.property.aggregationInput">aggregationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.property.displayInput">displayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.property.aggregation">aggregation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumn">DataDatabricksAlertsV2ResultsEvaluationThresholdColumn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aggregationInput`<sup>Optional</sup> <a name="aggregationInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.property.aggregationInput"></a>

```typescript
public readonly aggregationInput: string;
```

- *Type:* string

---

##### `displayInput`<sup>Optional</sup> <a name="displayInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.property.displayInput"></a>

```typescript
public readonly displayInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `aggregation`<sup>Required</sup> <a name="aggregation" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.property.aggregation"></a>

```typescript
public readonly aggregation: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAlertsV2ResultsEvaluationThresholdColumn;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumn">DataDatabricksAlertsV2ResultsEvaluationThresholdColumn</a>

---


### DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference <a name="DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAlertsV2 } from '@cdktf/provider-databricks'

new dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.putColumn">putColumn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.putValue">putValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.resetColumn">resetColumn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putColumn` <a name="putColumn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.putColumn"></a>

```typescript
public putColumn(value: DataDatabricksAlertsV2ResultsEvaluationThresholdColumn): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.putColumn.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumn">DataDatabricksAlertsV2ResultsEvaluationThresholdColumn</a>

---

##### `putValue` <a name="putValue" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.putValue"></a>

```typescript
public putValue(value: DataDatabricksAlertsV2ResultsEvaluationThresholdValue): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.putValue.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValue">DataDatabricksAlertsV2ResultsEvaluationThresholdValue</a>

---

##### `resetColumn` <a name="resetColumn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.resetColumn"></a>

```typescript
public resetColumn(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.property.column">column</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference">DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.property.value">value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference">DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.property.columnInput">columnInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumn">DataDatabricksAlertsV2ResultsEvaluationThresholdColumn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.property.valueInput">valueInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValue">DataDatabricksAlertsV2ResultsEvaluationThresholdValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThreshold">DataDatabricksAlertsV2ResultsEvaluationThreshold</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.property.column"></a>

```typescript
public readonly column: DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference">DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference</a>

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.property.value"></a>

```typescript
public readonly value: DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference">DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference</a>

---

##### `columnInput`<sup>Optional</sup> <a name="columnInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.property.columnInput"></a>

```typescript
public readonly columnInput: IResolvable | DataDatabricksAlertsV2ResultsEvaluationThresholdColumn;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumn">DataDatabricksAlertsV2ResultsEvaluationThresholdColumn</a>

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: IResolvable | DataDatabricksAlertsV2ResultsEvaluationThresholdValue;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValue">DataDatabricksAlertsV2ResultsEvaluationThresholdValue</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAlertsV2ResultsEvaluationThreshold;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThreshold">DataDatabricksAlertsV2ResultsEvaluationThreshold</a>

---


### DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference <a name="DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAlertsV2 } from '@cdktf/provider-databricks'

new dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.resetBoolValue">resetBoolValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.resetDoubleValue">resetDoubleValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.resetStringValue">resetStringValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBoolValue` <a name="resetBoolValue" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.resetBoolValue"></a>

```typescript
public resetBoolValue(): void
```

##### `resetDoubleValue` <a name="resetDoubleValue" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.resetDoubleValue"></a>

```typescript
public resetDoubleValue(): void
```

##### `resetStringValue` <a name="resetStringValue" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.resetStringValue"></a>

```typescript
public resetStringValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.property.boolValueInput">boolValueInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.property.doubleValueInput">doubleValueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.property.stringValueInput">stringValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.property.boolValue">boolValue</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.property.doubleValue">doubleValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.property.stringValue">stringValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValue">DataDatabricksAlertsV2ResultsEvaluationThresholdValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `boolValueInput`<sup>Optional</sup> <a name="boolValueInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.property.boolValueInput"></a>

```typescript
public readonly boolValueInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `doubleValueInput`<sup>Optional</sup> <a name="doubleValueInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.property.doubleValueInput"></a>

```typescript
public readonly doubleValueInput: number;
```

- *Type:* number

---

##### `stringValueInput`<sup>Optional</sup> <a name="stringValueInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.property.stringValueInput"></a>

```typescript
public readonly stringValueInput: string;
```

- *Type:* string

---

##### `boolValue`<sup>Required</sup> <a name="boolValue" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.property.boolValue"></a>

```typescript
public readonly boolValue: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `doubleValue`<sup>Required</sup> <a name="doubleValue" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.property.doubleValue"></a>

```typescript
public readonly doubleValue: number;
```

- *Type:* number

---

##### `stringValue`<sup>Required</sup> <a name="stringValue" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.property.stringValue"></a>

```typescript
public readonly stringValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAlertsV2ResultsEvaluationThresholdValue;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValue">DataDatabricksAlertsV2ResultsEvaluationThresholdValue</a>

---


### DataDatabricksAlertsV2ResultsList <a name="DataDatabricksAlertsV2ResultsList" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsList.Initializer"></a>

```typescript
import { dataDatabricksAlertsV2 } from '@cdktf/provider-databricks'

new dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsList.get"></a>

```typescript
public get(index: number): DataDatabricksAlertsV2ResultsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Results">DataDatabricksAlertsV2Results</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAlertsV2Results[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Results">DataDatabricksAlertsV2Results</a>[]

---


### DataDatabricksAlertsV2ResultsOutputReference <a name="DataDatabricksAlertsV2ResultsOutputReference" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAlertsV2 } from '@cdktf/provider-databricks'

new dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.putEvaluation">putEvaluation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.putSchedule">putSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.resetCustomDescription">resetCustomDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.resetCustomSummary">resetCustomSummary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.resetEvaluation">resetEvaluation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.resetParentPath">resetParentPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.resetQueryText">resetQueryText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.resetSchedule">resetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.resetWarehouseId">resetWarehouseId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEvaluation` <a name="putEvaluation" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.putEvaluation"></a>

```typescript
public putEvaluation(value: DataDatabricksAlertsV2ResultsEvaluation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.putEvaluation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluation">DataDatabricksAlertsV2ResultsEvaluation</a>

---

##### `putSchedule` <a name="putSchedule" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.putSchedule"></a>

```typescript
public putSchedule(value: DataDatabricksAlertsV2ResultsSchedule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsSchedule">DataDatabricksAlertsV2ResultsSchedule</a>

---

##### `resetCustomDescription` <a name="resetCustomDescription" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.resetCustomDescription"></a>

```typescript
public resetCustomDescription(): void
```

##### `resetCustomSummary` <a name="resetCustomSummary" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.resetCustomSummary"></a>

```typescript
public resetCustomSummary(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetEvaluation` <a name="resetEvaluation" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.resetEvaluation"></a>

```typescript
public resetEvaluation(): void
```

##### `resetParentPath` <a name="resetParentPath" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.resetParentPath"></a>

```typescript
public resetParentPath(): void
```

##### `resetQueryText` <a name="resetQueryText" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.resetQueryText"></a>

```typescript
public resetQueryText(): void
```

##### `resetSchedule` <a name="resetSchedule" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.resetSchedule"></a>

```typescript
public resetSchedule(): void
```

##### `resetWarehouseId` <a name="resetWarehouseId" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.resetWarehouseId"></a>

```typescript
public resetWarehouseId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.evaluation">evaluation</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference">DataDatabricksAlertsV2ResultsEvaluationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.lifecycleState">lifecycleState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.ownerUserName">ownerUserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.runAsUserName">runAsUserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference">DataDatabricksAlertsV2ResultsScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.customDescriptionInput">customDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.customSummaryInput">customSummaryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.evaluationInput">evaluationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluation">DataDatabricksAlertsV2ResultsEvaluation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.parentPathInput">parentPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.queryTextInput">queryTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.scheduleInput">scheduleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsSchedule">DataDatabricksAlertsV2ResultsSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.warehouseIdInput">warehouseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.customDescription">customDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.customSummary">customSummary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.parentPath">parentPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.queryText">queryText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.warehouseId">warehouseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Results">DataDatabricksAlertsV2Results</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `evaluation`<sup>Required</sup> <a name="evaluation" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.evaluation"></a>

```typescript
public readonly evaluation: DataDatabricksAlertsV2ResultsEvaluationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference">DataDatabricksAlertsV2ResultsEvaluationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecycleState`<sup>Required</sup> <a name="lifecycleState" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.lifecycleState"></a>

```typescript
public readonly lifecycleState: string;
```

- *Type:* string

---

##### `ownerUserName`<sup>Required</sup> <a name="ownerUserName" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.ownerUserName"></a>

```typescript
public readonly ownerUserName: string;
```

- *Type:* string

---

##### `runAsUserName`<sup>Required</sup> <a name="runAsUserName" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.runAsUserName"></a>

```typescript
public readonly runAsUserName: string;
```

- *Type:* string

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.schedule"></a>

```typescript
public readonly schedule: DataDatabricksAlertsV2ResultsScheduleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference">DataDatabricksAlertsV2ResultsScheduleOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `customDescriptionInput`<sup>Optional</sup> <a name="customDescriptionInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.customDescriptionInput"></a>

```typescript
public readonly customDescriptionInput: string;
```

- *Type:* string

---

##### `customSummaryInput`<sup>Optional</sup> <a name="customSummaryInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.customSummaryInput"></a>

```typescript
public readonly customSummaryInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `evaluationInput`<sup>Optional</sup> <a name="evaluationInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.evaluationInput"></a>

```typescript
public readonly evaluationInput: IResolvable | DataDatabricksAlertsV2ResultsEvaluation;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluation">DataDatabricksAlertsV2ResultsEvaluation</a>

---

##### `parentPathInput`<sup>Optional</sup> <a name="parentPathInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.parentPathInput"></a>

```typescript
public readonly parentPathInput: string;
```

- *Type:* string

---

##### `queryTextInput`<sup>Optional</sup> <a name="queryTextInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.queryTextInput"></a>

```typescript
public readonly queryTextInput: string;
```

- *Type:* string

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.scheduleInput"></a>

```typescript
public readonly scheduleInput: IResolvable | DataDatabricksAlertsV2ResultsSchedule;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsSchedule">DataDatabricksAlertsV2ResultsSchedule</a>

---

##### `warehouseIdInput`<sup>Optional</sup> <a name="warehouseIdInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.warehouseIdInput"></a>

```typescript
public readonly warehouseIdInput: string;
```

- *Type:* string

---

##### `customDescription`<sup>Required</sup> <a name="customDescription" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.customDescription"></a>

```typescript
public readonly customDescription: string;
```

- *Type:* string

---

##### `customSummary`<sup>Required</sup> <a name="customSummary" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.customSummary"></a>

```typescript
public readonly customSummary: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `parentPath`<sup>Required</sup> <a name="parentPath" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.parentPath"></a>

```typescript
public readonly parentPath: string;
```

- *Type:* string

---

##### `queryText`<sup>Required</sup> <a name="queryText" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.queryText"></a>

```typescript
public readonly queryText: string;
```

- *Type:* string

---

##### `warehouseId`<sup>Required</sup> <a name="warehouseId" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.warehouseId"></a>

```typescript
public readonly warehouseId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksAlertsV2Results;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Results">DataDatabricksAlertsV2Results</a>

---


### DataDatabricksAlertsV2ResultsScheduleOutputReference <a name="DataDatabricksAlertsV2ResultsScheduleOutputReference" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAlertsV2 } from '@cdktf/provider-databricks'

new dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.resetPauseStatus">resetPauseStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.resetQuartzCronSchedule">resetQuartzCronSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.resetTimezoneId">resetTimezoneId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPauseStatus` <a name="resetPauseStatus" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.resetPauseStatus"></a>

```typescript
public resetPauseStatus(): void
```

##### `resetQuartzCronSchedule` <a name="resetQuartzCronSchedule" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.resetQuartzCronSchedule"></a>

```typescript
public resetQuartzCronSchedule(): void
```

##### `resetTimezoneId` <a name="resetTimezoneId" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.resetTimezoneId"></a>

```typescript
public resetTimezoneId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.property.pauseStatusInput">pauseStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.property.quartzCronScheduleInput">quartzCronScheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.property.timezoneIdInput">timezoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.property.pauseStatus">pauseStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.property.quartzCronSchedule">quartzCronSchedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.property.timezoneId">timezoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsSchedule">DataDatabricksAlertsV2ResultsSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pauseStatusInput`<sup>Optional</sup> <a name="pauseStatusInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.property.pauseStatusInput"></a>

```typescript
public readonly pauseStatusInput: string;
```

- *Type:* string

---

##### `quartzCronScheduleInput`<sup>Optional</sup> <a name="quartzCronScheduleInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.property.quartzCronScheduleInput"></a>

```typescript
public readonly quartzCronScheduleInput: string;
```

- *Type:* string

---

##### `timezoneIdInput`<sup>Optional</sup> <a name="timezoneIdInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.property.timezoneIdInput"></a>

```typescript
public readonly timezoneIdInput: string;
```

- *Type:* string

---

##### `pauseStatus`<sup>Required</sup> <a name="pauseStatus" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.property.pauseStatus"></a>

```typescript
public readonly pauseStatus: string;
```

- *Type:* string

---

##### `quartzCronSchedule`<sup>Required</sup> <a name="quartzCronSchedule" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.property.quartzCronSchedule"></a>

```typescript
public readonly quartzCronSchedule: string;
```

- *Type:* string

---

##### `timezoneId`<sup>Required</sup> <a name="timezoneId" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.property.timezoneId"></a>

```typescript
public readonly timezoneId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAlertsV2ResultsSchedule;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsSchedule">DataDatabricksAlertsV2ResultsSchedule</a>

---



