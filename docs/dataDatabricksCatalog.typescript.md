# `dataDatabricksCatalog` Submodule <a name="`dataDatabricksCatalog` Submodule" id="@cdktf/provider-databricks.dataDatabricksCatalog"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksCatalog <a name="DataDatabricksCatalog" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/catalog databricks_catalog}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.Initializer"></a>

```typescript
import { dataDatabricksCatalog } from '@cdktf/provider-databricks'

new dataDatabricksCatalog.DataDatabricksCatalog(scope: Construct, id: string, config: DataDatabricksCatalogConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig">DataDatabricksCatalogConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig">DataDatabricksCatalogConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.putCatalogInfo">putCatalogInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.resetCatalogInfo">resetCatalogInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putCatalogInfo` <a name="putCatalogInfo" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.putCatalogInfo"></a>

```typescript
public putCatalogInfo(value: DataDatabricksCatalogCatalogInfo): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.putCatalogInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo">DataDatabricksCatalogCatalogInfo</a>

---

##### `resetCatalogInfo` <a name="resetCatalogInfo" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.resetCatalogInfo"></a>

```typescript
public resetCatalogInfo(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksCatalog resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.isConstruct"></a>

```typescript
import { dataDatabricksCatalog } from '@cdktf/provider-databricks'

dataDatabricksCatalog.DataDatabricksCatalog.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.isTerraformElement"></a>

```typescript
import { dataDatabricksCatalog } from '@cdktf/provider-databricks'

dataDatabricksCatalog.DataDatabricksCatalog.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.isTerraformDataSource"></a>

```typescript
import { dataDatabricksCatalog } from '@cdktf/provider-databricks'

dataDatabricksCatalog.DataDatabricksCatalog.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.generateConfigForImport"></a>

```typescript
import { dataDatabricksCatalog } from '@cdktf/provider-databricks'

dataDatabricksCatalog.DataDatabricksCatalog.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataDatabricksCatalog resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksCatalog to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksCatalog that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/catalog#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksCatalog to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.catalogInfo">catalogInfo</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference">DataDatabricksCatalogCatalogInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.catalogInfoInput">catalogInfoInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo">DataDatabricksCatalogCatalogInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `catalogInfo`<sup>Required</sup> <a name="catalogInfo" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.catalogInfo"></a>

```typescript
public readonly catalogInfo: DataDatabricksCatalogCatalogInfoOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference">DataDatabricksCatalogCatalogInfoOutputReference</a>

---

##### `catalogInfoInput`<sup>Optional</sup> <a name="catalogInfoInput" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.catalogInfoInput"></a>

```typescript
public readonly catalogInfoInput: DataDatabricksCatalogCatalogInfo;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo">DataDatabricksCatalogCatalogInfo</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksCatalogCatalogInfo <a name="DataDatabricksCatalogCatalogInfo" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.Initializer"></a>

```typescript
import { dataDatabricksCatalog } from '@cdktf/provider-databricks'

const dataDatabricksCatalogCatalogInfo: dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.browseOnly">browseOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/catalog#browse_only DataDatabricksCatalog#browse_only}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.catalogType">catalogType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/catalog#catalog_type DataDatabricksCatalog#catalog_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.comment">comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/catalog#comment DataDatabricksCatalog#comment}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.connectionName">connectionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/catalog#connection_name DataDatabricksCatalog#connection_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.createdAt">createdAt</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/catalog#created_at DataDatabricksCatalog#created_at}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.createdBy">createdBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/catalog#created_by DataDatabricksCatalog#created_by}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.effectivePredictiveOptimizationFlag">effectivePredictiveOptimizationFlag</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag">DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag</a></code> | effective_predictive_optimization_flag block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.enablePredictiveOptimization">enablePredictiveOptimization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/catalog#enable_predictive_optimization DataDatabricksCatalog#enable_predictive_optimization}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.fullName">fullName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/catalog#full_name DataDatabricksCatalog#full_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.isolationMode">isolationMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/catalog#isolation_mode DataDatabricksCatalog#isolation_mode}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.metastoreId">metastoreId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/catalog#metastore_id DataDatabricksCatalog#metastore_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/catalog#name DataDatabricksCatalog#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.options">options</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/catalog#options DataDatabricksCatalog#options}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.owner">owner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/catalog#owner DataDatabricksCatalog#owner}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.properties">properties</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/catalog#properties DataDatabricksCatalog#properties}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.providerName">providerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/catalog#provider_name DataDatabricksCatalog#provider_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.provisioningInfo">provisioningInfo</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfo">DataDatabricksCatalogCatalogInfoProvisioningInfo</a></code> | provisioning_info block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.securableType">securableType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/catalog#securable_type DataDatabricksCatalog#securable_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.shareName">shareName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/catalog#share_name DataDatabricksCatalog#share_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.storageLocation">storageLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/catalog#storage_location DataDatabricksCatalog#storage_location}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.storageRoot">storageRoot</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/catalog#storage_root DataDatabricksCatalog#storage_root}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.updatedAt">updatedAt</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/catalog#updated_at DataDatabricksCatalog#updated_at}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.updatedBy">updatedBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/catalog#updated_by DataDatabricksCatalog#updated_by}. |

---

##### `browseOnly`<sup>Optional</sup> <a name="browseOnly" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.browseOnly"></a>

```typescript
public readonly browseOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/catalog#browse_only DataDatabricksCatalog#browse_only}.

---

##### `catalogType`<sup>Optional</sup> <a name="catalogType" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.catalogType"></a>

```typescript
public readonly catalogType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/catalog#catalog_type DataDatabricksCatalog#catalog_type}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/catalog#comment DataDatabricksCatalog#comment}.

---

##### `connectionName`<sup>Optional</sup> <a name="connectionName" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.connectionName"></a>

```typescript
public readonly connectionName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/catalog#connection_name DataDatabricksCatalog#connection_name}.

---

##### `createdAt`<sup>Optional</sup> <a name="createdAt" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.createdAt"></a>

```typescript
public readonly createdAt: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/catalog#created_at DataDatabricksCatalog#created_at}.

---

##### `createdBy`<sup>Optional</sup> <a name="createdBy" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/catalog#created_by DataDatabricksCatalog#created_by}.

---

##### `effectivePredictiveOptimizationFlag`<sup>Optional</sup> <a name="effectivePredictiveOptimizationFlag" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.effectivePredictiveOptimizationFlag"></a>

```typescript
public readonly effectivePredictiveOptimizationFlag: DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag">DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag</a>

effective_predictive_optimization_flag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/catalog#effective_predictive_optimization_flag DataDatabricksCatalog#effective_predictive_optimization_flag}

---

##### `enablePredictiveOptimization`<sup>Optional</sup> <a name="enablePredictiveOptimization" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.enablePredictiveOptimization"></a>

```typescript
public readonly enablePredictiveOptimization: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/catalog#enable_predictive_optimization DataDatabricksCatalog#enable_predictive_optimization}.

---

##### `fullName`<sup>Optional</sup> <a name="fullName" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.fullName"></a>

```typescript
public readonly fullName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/catalog#full_name DataDatabricksCatalog#full_name}.

---

##### `isolationMode`<sup>Optional</sup> <a name="isolationMode" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.isolationMode"></a>

```typescript
public readonly isolationMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/catalog#isolation_mode DataDatabricksCatalog#isolation_mode}.

---

##### `metastoreId`<sup>Optional</sup> <a name="metastoreId" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.metastoreId"></a>

```typescript
public readonly metastoreId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/catalog#metastore_id DataDatabricksCatalog#metastore_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/catalog#name DataDatabricksCatalog#name}.

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.options"></a>

```typescript
public readonly options: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/catalog#options DataDatabricksCatalog#options}.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/catalog#owner DataDatabricksCatalog#owner}.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.properties"></a>

```typescript
public readonly properties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/catalog#properties DataDatabricksCatalog#properties}.

---

##### `providerName`<sup>Optional</sup> <a name="providerName" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.providerName"></a>

```typescript
public readonly providerName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/catalog#provider_name DataDatabricksCatalog#provider_name}.

---

##### `provisioningInfo`<sup>Optional</sup> <a name="provisioningInfo" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.provisioningInfo"></a>

```typescript
public readonly provisioningInfo: DataDatabricksCatalogCatalogInfoProvisioningInfo;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfo">DataDatabricksCatalogCatalogInfoProvisioningInfo</a>

provisioning_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/catalog#provisioning_info DataDatabricksCatalog#provisioning_info}

---

##### `securableType`<sup>Optional</sup> <a name="securableType" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.securableType"></a>

```typescript
public readonly securableType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/catalog#securable_type DataDatabricksCatalog#securable_type}.

---

##### `shareName`<sup>Optional</sup> <a name="shareName" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.shareName"></a>

```typescript
public readonly shareName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/catalog#share_name DataDatabricksCatalog#share_name}.

---

##### `storageLocation`<sup>Optional</sup> <a name="storageLocation" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.storageLocation"></a>

```typescript
public readonly storageLocation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/catalog#storage_location DataDatabricksCatalog#storage_location}.

---

##### `storageRoot`<sup>Optional</sup> <a name="storageRoot" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.storageRoot"></a>

```typescript
public readonly storageRoot: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/catalog#storage_root DataDatabricksCatalog#storage_root}.

---

##### `updatedAt`<sup>Optional</sup> <a name="updatedAt" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.updatedAt"></a>

```typescript
public readonly updatedAt: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/catalog#updated_at DataDatabricksCatalog#updated_at}.

---

##### `updatedBy`<sup>Optional</sup> <a name="updatedBy" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.updatedBy"></a>

```typescript
public readonly updatedBy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/catalog#updated_by DataDatabricksCatalog#updated_by}.

---

### DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag <a name="DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag.Initializer"></a>

```typescript
import { dataDatabricksCatalog } from '@cdktf/provider-databricks'

const dataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag: dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/catalog#value DataDatabricksCatalog#value}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag.property.inheritedFromName">inheritedFromName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/catalog#inherited_from_name DataDatabricksCatalog#inherited_from_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag.property.inheritedFromType">inheritedFromType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/catalog#inherited_from_type DataDatabricksCatalog#inherited_from_type}. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/catalog#value DataDatabricksCatalog#value}.

---

##### `inheritedFromName`<sup>Optional</sup> <a name="inheritedFromName" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag.property.inheritedFromName"></a>

```typescript
public readonly inheritedFromName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/catalog#inherited_from_name DataDatabricksCatalog#inherited_from_name}.

---

##### `inheritedFromType`<sup>Optional</sup> <a name="inheritedFromType" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag.property.inheritedFromType"></a>

```typescript
public readonly inheritedFromType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/catalog#inherited_from_type DataDatabricksCatalog#inherited_from_type}.

---

### DataDatabricksCatalogCatalogInfoProvisioningInfo <a name="DataDatabricksCatalogCatalogInfoProvisioningInfo" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfo.Initializer"></a>

```typescript
import { dataDatabricksCatalog } from '@cdktf/provider-databricks'

const dataDatabricksCatalogCatalogInfoProvisioningInfo: dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfo.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/catalog#state DataDatabricksCatalog#state}. |

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfo.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/catalog#state DataDatabricksCatalog#state}.

---

### DataDatabricksCatalogConfig <a name="DataDatabricksCatalogConfig" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig.Initializer"></a>

```typescript
import { dataDatabricksCatalog } from '@cdktf/provider-databricks'

const dataDatabricksCatalogConfig: dataDatabricksCatalog.DataDatabricksCatalogConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/catalog#name DataDatabricksCatalog#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig.property.catalogInfo">catalogInfo</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo">DataDatabricksCatalogCatalogInfo</a></code> | catalog_info block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/catalog#id DataDatabricksCatalog#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/catalog#name DataDatabricksCatalog#name}.

---

##### `catalogInfo`<sup>Optional</sup> <a name="catalogInfo" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig.property.catalogInfo"></a>

```typescript
public readonly catalogInfo: DataDatabricksCatalogCatalogInfo;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo">DataDatabricksCatalogCatalogInfo</a>

catalog_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/catalog#catalog_info DataDatabricksCatalog#catalog_info}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/catalog#id DataDatabricksCatalog#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference <a name="DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.Initializer"></a>

```typescript
import { dataDatabricksCatalog } from '@cdktf/provider-databricks'

new dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.resetInheritedFromName">resetInheritedFromName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.resetInheritedFromType">resetInheritedFromType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInheritedFromName` <a name="resetInheritedFromName" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.resetInheritedFromName"></a>

```typescript
public resetInheritedFromName(): void
```

##### `resetInheritedFromType` <a name="resetInheritedFromType" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.resetInheritedFromType"></a>

```typescript
public resetInheritedFromType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromNameInput">inheritedFromNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromTypeInput">inheritedFromTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromName">inheritedFromName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromType">inheritedFromType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag">DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inheritedFromNameInput`<sup>Optional</sup> <a name="inheritedFromNameInput" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromNameInput"></a>

```typescript
public readonly inheritedFromNameInput: string;
```

- *Type:* string

---

##### `inheritedFromTypeInput`<sup>Optional</sup> <a name="inheritedFromTypeInput" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromTypeInput"></a>

```typescript
public readonly inheritedFromTypeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `inheritedFromName`<sup>Required</sup> <a name="inheritedFromName" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromName"></a>

```typescript
public readonly inheritedFromName: string;
```

- *Type:* string

---

##### `inheritedFromType`<sup>Required</sup> <a name="inheritedFromType" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromType"></a>

```typescript
public readonly inheritedFromType: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag">DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag</a>

---


### DataDatabricksCatalogCatalogInfoOutputReference <a name="DataDatabricksCatalogCatalogInfoOutputReference" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.Initializer"></a>

```typescript
import { dataDatabricksCatalog } from '@cdktf/provider-databricks'

new dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.putEffectivePredictiveOptimizationFlag">putEffectivePredictiveOptimizationFlag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.putProvisioningInfo">putProvisioningInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetBrowseOnly">resetBrowseOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetCatalogType">resetCatalogType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetConnectionName">resetConnectionName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetCreatedAt">resetCreatedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetCreatedBy">resetCreatedBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetEffectivePredictiveOptimizationFlag">resetEffectivePredictiveOptimizationFlag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetEnablePredictiveOptimization">resetEnablePredictiveOptimization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetFullName">resetFullName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetIsolationMode">resetIsolationMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetMetastoreId">resetMetastoreId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetOptions">resetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetOwner">resetOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetProperties">resetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetProviderName">resetProviderName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetProvisioningInfo">resetProvisioningInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetSecurableType">resetSecurableType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetShareName">resetShareName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetStorageLocation">resetStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetStorageRoot">resetStorageRoot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetUpdatedAt">resetUpdatedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetUpdatedBy">resetUpdatedBy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEffectivePredictiveOptimizationFlag` <a name="putEffectivePredictiveOptimizationFlag" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.putEffectivePredictiveOptimizationFlag"></a>

```typescript
public putEffectivePredictiveOptimizationFlag(value: DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.putEffectivePredictiveOptimizationFlag.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag">DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag</a>

---

##### `putProvisioningInfo` <a name="putProvisioningInfo" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.putProvisioningInfo"></a>

```typescript
public putProvisioningInfo(value: DataDatabricksCatalogCatalogInfoProvisioningInfo): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.putProvisioningInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfo">DataDatabricksCatalogCatalogInfoProvisioningInfo</a>

---

##### `resetBrowseOnly` <a name="resetBrowseOnly" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetBrowseOnly"></a>

```typescript
public resetBrowseOnly(): void
```

##### `resetCatalogType` <a name="resetCatalogType" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetCatalogType"></a>

```typescript
public resetCatalogType(): void
```

##### `resetComment` <a name="resetComment" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetConnectionName` <a name="resetConnectionName" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetConnectionName"></a>

```typescript
public resetConnectionName(): void
```

##### `resetCreatedAt` <a name="resetCreatedAt" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetCreatedAt"></a>

```typescript
public resetCreatedAt(): void
```

##### `resetCreatedBy` <a name="resetCreatedBy" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetCreatedBy"></a>

```typescript
public resetCreatedBy(): void
```

##### `resetEffectivePredictiveOptimizationFlag` <a name="resetEffectivePredictiveOptimizationFlag" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetEffectivePredictiveOptimizationFlag"></a>

```typescript
public resetEffectivePredictiveOptimizationFlag(): void
```

##### `resetEnablePredictiveOptimization` <a name="resetEnablePredictiveOptimization" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetEnablePredictiveOptimization"></a>

```typescript
public resetEnablePredictiveOptimization(): void
```

##### `resetFullName` <a name="resetFullName" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetFullName"></a>

```typescript
public resetFullName(): void
```

##### `resetIsolationMode` <a name="resetIsolationMode" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetIsolationMode"></a>

```typescript
public resetIsolationMode(): void
```

##### `resetMetastoreId` <a name="resetMetastoreId" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetMetastoreId"></a>

```typescript
public resetMetastoreId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetOptions` <a name="resetOptions" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetOptions"></a>

```typescript
public resetOptions(): void
```

##### `resetOwner` <a name="resetOwner" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetOwner"></a>

```typescript
public resetOwner(): void
```

##### `resetProperties` <a name="resetProperties" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetProperties"></a>

```typescript
public resetProperties(): void
```

##### `resetProviderName` <a name="resetProviderName" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetProviderName"></a>

```typescript
public resetProviderName(): void
```

##### `resetProvisioningInfo` <a name="resetProvisioningInfo" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetProvisioningInfo"></a>

```typescript
public resetProvisioningInfo(): void
```

##### `resetSecurableType` <a name="resetSecurableType" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetSecurableType"></a>

```typescript
public resetSecurableType(): void
```

##### `resetShareName` <a name="resetShareName" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetShareName"></a>

```typescript
public resetShareName(): void
```

##### `resetStorageLocation` <a name="resetStorageLocation" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetStorageLocation"></a>

```typescript
public resetStorageLocation(): void
```

##### `resetStorageRoot` <a name="resetStorageRoot" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetStorageRoot"></a>

```typescript
public resetStorageRoot(): void
```

##### `resetUpdatedAt` <a name="resetUpdatedAt" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetUpdatedAt"></a>

```typescript
public resetUpdatedAt(): void
```

##### `resetUpdatedBy` <a name="resetUpdatedBy" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetUpdatedBy"></a>

```typescript
public resetUpdatedBy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.effectivePredictiveOptimizationFlag">effectivePredictiveOptimizationFlag</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference">DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.provisioningInfo">provisioningInfo</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference">DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.browseOnlyInput">browseOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.catalogTypeInput">catalogTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.connectionNameInput">connectionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.createdAtInput">createdAtInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.createdByInput">createdByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.effectivePredictiveOptimizationFlagInput">effectivePredictiveOptimizationFlagInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag">DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.enablePredictiveOptimizationInput">enablePredictiveOptimizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.fullNameInput">fullNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.isolationModeInput">isolationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.metastoreIdInput">metastoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.optionsInput">optionsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.ownerInput">ownerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.propertiesInput">propertiesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.providerNameInput">providerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.provisioningInfoInput">provisioningInfoInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfo">DataDatabricksCatalogCatalogInfoProvisioningInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.securableTypeInput">securableTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.shareNameInput">shareNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.storageLocationInput">storageLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.storageRootInput">storageRootInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.updatedAtInput">updatedAtInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.updatedByInput">updatedByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.browseOnly">browseOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.catalogType">catalogType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.connectionName">connectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.createdAt">createdAt</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.enablePredictiveOptimization">enablePredictiveOptimization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.fullName">fullName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.isolationMode">isolationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.metastoreId">metastoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.options">options</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.properties">properties</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.providerName">providerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.securableType">securableType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.shareName">shareName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.storageLocation">storageLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.storageRoot">storageRoot</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.updatedAt">updatedAt</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.updatedBy">updatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo">DataDatabricksCatalogCatalogInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `effectivePredictiveOptimizationFlag`<sup>Required</sup> <a name="effectivePredictiveOptimizationFlag" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.effectivePredictiveOptimizationFlag"></a>

```typescript
public readonly effectivePredictiveOptimizationFlag: DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference">DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference</a>

---

##### `provisioningInfo`<sup>Required</sup> <a name="provisioningInfo" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.provisioningInfo"></a>

```typescript
public readonly provisioningInfo: DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference">DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference</a>

---

##### `browseOnlyInput`<sup>Optional</sup> <a name="browseOnlyInput" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.browseOnlyInput"></a>

```typescript
public readonly browseOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `catalogTypeInput`<sup>Optional</sup> <a name="catalogTypeInput" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.catalogTypeInput"></a>

```typescript
public readonly catalogTypeInput: string;
```

- *Type:* string

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `connectionNameInput`<sup>Optional</sup> <a name="connectionNameInput" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.connectionNameInput"></a>

```typescript
public readonly connectionNameInput: string;
```

- *Type:* string

---

##### `createdAtInput`<sup>Optional</sup> <a name="createdAtInput" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.createdAtInput"></a>

```typescript
public readonly createdAtInput: number;
```

- *Type:* number

---

##### `createdByInput`<sup>Optional</sup> <a name="createdByInput" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.createdByInput"></a>

```typescript
public readonly createdByInput: string;
```

- *Type:* string

---

##### `effectivePredictiveOptimizationFlagInput`<sup>Optional</sup> <a name="effectivePredictiveOptimizationFlagInput" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.effectivePredictiveOptimizationFlagInput"></a>

```typescript
public readonly effectivePredictiveOptimizationFlagInput: DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag">DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag</a>

---

##### `enablePredictiveOptimizationInput`<sup>Optional</sup> <a name="enablePredictiveOptimizationInput" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.enablePredictiveOptimizationInput"></a>

```typescript
public readonly enablePredictiveOptimizationInput: string;
```

- *Type:* string

---

##### `fullNameInput`<sup>Optional</sup> <a name="fullNameInput" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.fullNameInput"></a>

```typescript
public readonly fullNameInput: string;
```

- *Type:* string

---

##### `isolationModeInput`<sup>Optional</sup> <a name="isolationModeInput" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.isolationModeInput"></a>

```typescript
public readonly isolationModeInput: string;
```

- *Type:* string

---

##### `metastoreIdInput`<sup>Optional</sup> <a name="metastoreIdInput" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.metastoreIdInput"></a>

```typescript
public readonly metastoreIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.optionsInput"></a>

```typescript
public readonly optionsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `ownerInput`<sup>Optional</sup> <a name="ownerInput" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.ownerInput"></a>

```typescript
public readonly ownerInput: string;
```

- *Type:* string

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.propertiesInput"></a>

```typescript
public readonly propertiesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `providerNameInput`<sup>Optional</sup> <a name="providerNameInput" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.providerNameInput"></a>

```typescript
public readonly providerNameInput: string;
```

- *Type:* string

---

##### `provisioningInfoInput`<sup>Optional</sup> <a name="provisioningInfoInput" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.provisioningInfoInput"></a>

```typescript
public readonly provisioningInfoInput: DataDatabricksCatalogCatalogInfoProvisioningInfo;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfo">DataDatabricksCatalogCatalogInfoProvisioningInfo</a>

---

##### `securableTypeInput`<sup>Optional</sup> <a name="securableTypeInput" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.securableTypeInput"></a>

```typescript
public readonly securableTypeInput: string;
```

- *Type:* string

---

##### `shareNameInput`<sup>Optional</sup> <a name="shareNameInput" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.shareNameInput"></a>

```typescript
public readonly shareNameInput: string;
```

- *Type:* string

---

##### `storageLocationInput`<sup>Optional</sup> <a name="storageLocationInput" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.storageLocationInput"></a>

```typescript
public readonly storageLocationInput: string;
```

- *Type:* string

---

##### `storageRootInput`<sup>Optional</sup> <a name="storageRootInput" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.storageRootInput"></a>

```typescript
public readonly storageRootInput: string;
```

- *Type:* string

---

##### `updatedAtInput`<sup>Optional</sup> <a name="updatedAtInput" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.updatedAtInput"></a>

```typescript
public readonly updatedAtInput: number;
```

- *Type:* number

---

##### `updatedByInput`<sup>Optional</sup> <a name="updatedByInput" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.updatedByInput"></a>

```typescript
public readonly updatedByInput: string;
```

- *Type:* string

---

##### `browseOnly`<sup>Required</sup> <a name="browseOnly" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.browseOnly"></a>

```typescript
public readonly browseOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `catalogType`<sup>Required</sup> <a name="catalogType" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.catalogType"></a>

```typescript
public readonly catalogType: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `connectionName`<sup>Required</sup> <a name="connectionName" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.connectionName"></a>

```typescript
public readonly connectionName: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: number;
```

- *Type:* number

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `enablePredictiveOptimization`<sup>Required</sup> <a name="enablePredictiveOptimization" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.enablePredictiveOptimization"></a>

```typescript
public readonly enablePredictiveOptimization: string;
```

- *Type:* string

---

##### `fullName`<sup>Required</sup> <a name="fullName" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.fullName"></a>

```typescript
public readonly fullName: string;
```

- *Type:* string

---

##### `isolationMode`<sup>Required</sup> <a name="isolationMode" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.isolationMode"></a>

```typescript
public readonly isolationMode: string;
```

- *Type:* string

---

##### `metastoreId`<sup>Required</sup> <a name="metastoreId" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.metastoreId"></a>

```typescript
public readonly metastoreId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.options"></a>

```typescript
public readonly options: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.properties"></a>

```typescript
public readonly properties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.providerName"></a>

```typescript
public readonly providerName: string;
```

- *Type:* string

---

##### `securableType`<sup>Required</sup> <a name="securableType" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.securableType"></a>

```typescript
public readonly securableType: string;
```

- *Type:* string

---

##### `shareName`<sup>Required</sup> <a name="shareName" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.shareName"></a>

```typescript
public readonly shareName: string;
```

- *Type:* string

---

##### `storageLocation`<sup>Required</sup> <a name="storageLocation" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.storageLocation"></a>

```typescript
public readonly storageLocation: string;
```

- *Type:* string

---

##### `storageRoot`<sup>Required</sup> <a name="storageRoot" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.storageRoot"></a>

```typescript
public readonly storageRoot: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.updatedAt"></a>

```typescript
public readonly updatedAt: number;
```

- *Type:* number

---

##### `updatedBy`<sup>Required</sup> <a name="updatedBy" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.updatedBy"></a>

```typescript
public readonly updatedBy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksCatalogCatalogInfo;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo">DataDatabricksCatalogCatalogInfo</a>

---


### DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference <a name="DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.Initializer"></a>

```typescript
import { dataDatabricksCatalog } from '@cdktf/provider-databricks'

new dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.resetState">resetState</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetState` <a name="resetState" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.resetState"></a>

```typescript
public resetState(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfo">DataDatabricksCatalogCatalogInfoProvisioningInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksCatalogCatalogInfoProvisioningInfo;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfo">DataDatabricksCatalogCatalogInfoProvisioningInfo</a>

---



