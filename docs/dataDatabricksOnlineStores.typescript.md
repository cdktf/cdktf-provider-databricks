# `dataDatabricksOnlineStores` Submodule <a name="`dataDatabricksOnlineStores` Submodule" id="@cdktf/provider-databricks.dataDatabricksOnlineStores"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksOnlineStores <a name="DataDatabricksOnlineStores" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/online_stores databricks_online_stores}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.Initializer"></a>

```typescript
import { dataDatabricksOnlineStores } from '@cdktf/provider-databricks'

new dataDatabricksOnlineStores.DataDatabricksOnlineStores(scope: Construct, id: string, config?: DataDatabricksOnlineStoresConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresConfig">DataDatabricksOnlineStoresConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresConfig">DataDatabricksOnlineStoresConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksOnlineStores resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.isConstruct"></a>

```typescript
import { dataDatabricksOnlineStores } from '@cdktf/provider-databricks'

dataDatabricksOnlineStores.DataDatabricksOnlineStores.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.isTerraformElement"></a>

```typescript
import { dataDatabricksOnlineStores } from '@cdktf/provider-databricks'

dataDatabricksOnlineStores.DataDatabricksOnlineStores.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.isTerraformDataSource"></a>

```typescript
import { dataDatabricksOnlineStores } from '@cdktf/provider-databricks'

dataDatabricksOnlineStores.DataDatabricksOnlineStores.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.generateConfigForImport"></a>

```typescript
import { dataDatabricksOnlineStores } from '@cdktf/provider-databricks'

dataDatabricksOnlineStores.DataDatabricksOnlineStores.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataDatabricksOnlineStores resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksOnlineStores to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksOnlineStores that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/online_stores#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksOnlineStores to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.property.onlineStores">onlineStores</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresList">DataDatabricksOnlineStoresOnlineStoresList</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `onlineStores`<sup>Required</sup> <a name="onlineStores" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.property.onlineStores"></a>

```typescript
public readonly onlineStores: DataDatabricksOnlineStoresOnlineStoresList;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresList">DataDatabricksOnlineStoresOnlineStoresList</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksOnlineStoresConfig <a name="DataDatabricksOnlineStoresConfig" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresConfig.Initializer"></a>

```typescript
import { dataDatabricksOnlineStores } from '@cdktf/provider-databricks'

const dataDatabricksOnlineStoresConfig: dataDatabricksOnlineStores.DataDatabricksOnlineStoresConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

### DataDatabricksOnlineStoresOnlineStores <a name="DataDatabricksOnlineStoresOnlineStores" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStores"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStores.Initializer"></a>

```typescript
import { dataDatabricksOnlineStores } from '@cdktf/provider-databricks'

const dataDatabricksOnlineStoresOnlineStores: dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStores = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStores.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/online_stores#name DataDatabricksOnlineStores#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStores.property.capacity">capacity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/online_stores#capacity DataDatabricksOnlineStores#capacity}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStores.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/online_stores#name DataDatabricksOnlineStores#name}.

---

##### `capacity`<sup>Optional</sup> <a name="capacity" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStores.property.capacity"></a>

```typescript
public readonly capacity: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/online_stores#capacity DataDatabricksOnlineStores#capacity}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksOnlineStoresOnlineStoresList <a name="DataDatabricksOnlineStoresOnlineStoresList" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresList.Initializer"></a>

```typescript
import { dataDatabricksOnlineStores } from '@cdktf/provider-databricks'

new dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresList.get"></a>

```typescript
public get(index: number): DataDatabricksOnlineStoresOnlineStoresOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStores">DataDatabricksOnlineStoresOnlineStores</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksOnlineStoresOnlineStores[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStores">DataDatabricksOnlineStoresOnlineStores</a>[]

---


### DataDatabricksOnlineStoresOnlineStoresOutputReference <a name="DataDatabricksOnlineStoresOnlineStoresOutputReference" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.Initializer"></a>

```typescript
import { dataDatabricksOnlineStores } from '@cdktf/provider-databricks'

new dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.resetCapacity">resetCapacity</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCapacity` <a name="resetCapacity" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.resetCapacity"></a>

```typescript
public resetCapacity(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.property.creator">creator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.property.capacityInput">capacityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.property.capacity">capacity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStores">DataDatabricksOnlineStoresOnlineStores</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `creator`<sup>Required</sup> <a name="creator" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.property.creator"></a>

```typescript
public readonly creator: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `capacityInput`<sup>Optional</sup> <a name="capacityInput" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.property.capacityInput"></a>

```typescript
public readonly capacityInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.property.capacity"></a>

```typescript
public readonly capacity: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksOnlineStoresOnlineStores;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStores">DataDatabricksOnlineStoresOnlineStores</a>

---



