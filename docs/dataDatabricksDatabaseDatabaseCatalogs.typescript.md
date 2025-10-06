# `dataDatabricksDatabaseDatabaseCatalogs` Submodule <a name="`dataDatabricksDatabaseDatabaseCatalogs` Submodule" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksDatabaseDatabaseCatalogs <a name="DataDatabricksDatabaseDatabaseCatalogs" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/database_database_catalogs databricks_database_database_catalogs}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.Initializer"></a>

```typescript
import { dataDatabricksDatabaseDatabaseCatalogs } from '@cdktf/provider-databricks'

new dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs(scope: Construct, id: string, config?: DataDatabricksDatabaseDatabaseCatalogsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsConfig">DataDatabricksDatabaseDatabaseCatalogsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsConfig">DataDatabricksDatabaseDatabaseCatalogsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksDatabaseDatabaseCatalogs resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.isConstruct"></a>

```typescript
import { dataDatabricksDatabaseDatabaseCatalogs } from '@cdktf/provider-databricks'

dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.isTerraformElement"></a>

```typescript
import { dataDatabricksDatabaseDatabaseCatalogs } from '@cdktf/provider-databricks'

dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.isTerraformDataSource"></a>

```typescript
import { dataDatabricksDatabaseDatabaseCatalogs } from '@cdktf/provider-databricks'

dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.generateConfigForImport"></a>

```typescript
import { dataDatabricksDatabaseDatabaseCatalogs } from '@cdktf/provider-databricks'

dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataDatabricksDatabaseDatabaseCatalogs resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksDatabaseDatabaseCatalogs to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksDatabaseDatabaseCatalogs that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/database_database_catalogs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksDatabaseDatabaseCatalogs to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.databaseCatalogs">databaseCatalogs</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList">DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `databaseCatalogs`<sup>Required</sup> <a name="databaseCatalogs" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.databaseCatalogs"></a>

```typescript
public readonly databaseCatalogs: DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList">DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksDatabaseDatabaseCatalogsConfig <a name="DataDatabricksDatabaseDatabaseCatalogsConfig" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsConfig.Initializer"></a>

```typescript
import { dataDatabricksDatabaseDatabaseCatalogs } from '@cdktf/provider-databricks'

const dataDatabricksDatabaseDatabaseCatalogsConfig: dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

### DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogs <a name="DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogs" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogs.Initializer"></a>

```typescript
import { dataDatabricksDatabaseDatabaseCatalogs } from '@cdktf/provider-databricks'

const dataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogs: dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogs.property.databaseInstanceName">databaseInstanceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/database_database_catalogs#database_instance_name DataDatabricksDatabaseDatabaseCatalogs#database_instance_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogs.property.databaseName">databaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/database_database_catalogs#database_name DataDatabricksDatabaseDatabaseCatalogs#database_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogs.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/database_database_catalogs#name DataDatabricksDatabaseDatabaseCatalogs#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogs.property.createDatabaseIfNotExists">createDatabaseIfNotExists</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/database_database_catalogs#create_database_if_not_exists DataDatabricksDatabaseDatabaseCatalogs#create_database_if_not_exists}. |

---

##### `databaseInstanceName`<sup>Required</sup> <a name="databaseInstanceName" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogs.property.databaseInstanceName"></a>

```typescript
public readonly databaseInstanceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/database_database_catalogs#database_instance_name DataDatabricksDatabaseDatabaseCatalogs#database_instance_name}.

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogs.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/database_database_catalogs#database_name DataDatabricksDatabaseDatabaseCatalogs#database_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogs.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/database_database_catalogs#name DataDatabricksDatabaseDatabaseCatalogs#name}.

---

##### `createDatabaseIfNotExists`<sup>Optional</sup> <a name="createDatabaseIfNotExists" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogs.property.createDatabaseIfNotExists"></a>

```typescript
public readonly createDatabaseIfNotExists: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/database_database_catalogs#create_database_if_not_exists DataDatabricksDatabaseDatabaseCatalogs#create_database_if_not_exists}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList <a name="DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList.Initializer"></a>

```typescript
import { dataDatabricksDatabaseDatabaseCatalogs } from '@cdktf/provider-databricks'

new dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList.get"></a>

```typescript
public get(index: number): DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogs">DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogs">DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogs</a>[]

---


### DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference <a name="DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksDatabaseDatabaseCatalogs } from '@cdktf/provider-databricks'

new dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.resetCreateDatabaseIfNotExists">resetCreateDatabaseIfNotExists</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreateDatabaseIfNotExists` <a name="resetCreateDatabaseIfNotExists" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.resetCreateDatabaseIfNotExists"></a>

```typescript
public resetCreateDatabaseIfNotExists(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.property.createDatabaseIfNotExistsInput">createDatabaseIfNotExistsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.property.databaseInstanceNameInput">databaseInstanceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.property.createDatabaseIfNotExists">createDatabaseIfNotExists</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.property.databaseInstanceName">databaseInstanceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogs">DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `createDatabaseIfNotExistsInput`<sup>Optional</sup> <a name="createDatabaseIfNotExistsInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.property.createDatabaseIfNotExistsInput"></a>

```typescript
public readonly createDatabaseIfNotExistsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `databaseInstanceNameInput`<sup>Optional</sup> <a name="databaseInstanceNameInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.property.databaseInstanceNameInput"></a>

```typescript
public readonly databaseInstanceNameInput: string;
```

- *Type:* string

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `createDatabaseIfNotExists`<sup>Required</sup> <a name="createDatabaseIfNotExists" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.property.createDatabaseIfNotExists"></a>

```typescript
public readonly createDatabaseIfNotExists: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `databaseInstanceName`<sup>Required</sup> <a name="databaseInstanceName" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.property.databaseInstanceName"></a>

```typescript
public readonly databaseInstanceName: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogs;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogs">DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogs</a>

---



