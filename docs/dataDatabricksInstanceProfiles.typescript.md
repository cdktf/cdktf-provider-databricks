# `dataDatabricksInstanceProfiles` Submodule <a name="`dataDatabricksInstanceProfiles` Submodule" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksInstanceProfiles <a name="DataDatabricksInstanceProfiles" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/instance_profiles databricks_instance_profiles}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.Initializer"></a>

```typescript
import { dataDatabricksInstanceProfiles } from '@cdktf/provider-databricks'

new dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles(scope: Construct, id: string, config?: DataDatabricksInstanceProfilesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesConfig">DataDatabricksInstanceProfilesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesConfig">DataDatabricksInstanceProfilesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.putInstanceProfiles">putInstanceProfiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.resetInstanceProfiles">resetInstanceProfiles</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putInstanceProfiles` <a name="putInstanceProfiles" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.putInstanceProfiles"></a>

```typescript
public putInstanceProfiles(value: IResolvable | DataDatabricksInstanceProfilesInstanceProfiles[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.putInstanceProfiles.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfiles">DataDatabricksInstanceProfilesInstanceProfiles</a>[]

---

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInstanceProfiles` <a name="resetInstanceProfiles" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.resetInstanceProfiles"></a>

```typescript
public resetInstanceProfiles(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksInstanceProfiles resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.isConstruct"></a>

```typescript
import { dataDatabricksInstanceProfiles } from '@cdktf/provider-databricks'

dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.isTerraformElement"></a>

```typescript
import { dataDatabricksInstanceProfiles } from '@cdktf/provider-databricks'

dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.isTerraformDataSource"></a>

```typescript
import { dataDatabricksInstanceProfiles } from '@cdktf/provider-databricks'

dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.generateConfigForImport"></a>

```typescript
import { dataDatabricksInstanceProfiles } from '@cdktf/provider-databricks'

dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataDatabricksInstanceProfiles resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksInstanceProfiles to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksInstanceProfiles that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/instance_profiles#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksInstanceProfiles to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.instanceProfiles">instanceProfiles</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesList">DataDatabricksInstanceProfilesInstanceProfilesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.instanceProfilesInput">instanceProfilesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfiles">DataDatabricksInstanceProfilesInstanceProfiles</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `instanceProfiles`<sup>Required</sup> <a name="instanceProfiles" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.instanceProfiles"></a>

```typescript
public readonly instanceProfiles: DataDatabricksInstanceProfilesInstanceProfilesList;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesList">DataDatabricksInstanceProfilesInstanceProfilesList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceProfilesInput`<sup>Optional</sup> <a name="instanceProfilesInput" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.instanceProfilesInput"></a>

```typescript
public readonly instanceProfilesInput: IResolvable | DataDatabricksInstanceProfilesInstanceProfiles[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfiles">DataDatabricksInstanceProfilesInstanceProfiles</a>[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksInstanceProfilesConfig <a name="DataDatabricksInstanceProfilesConfig" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesConfig.Initializer"></a>

```typescript
import { dataDatabricksInstanceProfiles } from '@cdktf/provider-databricks'

const dataDatabricksInstanceProfilesConfig: dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/instance_profiles#id DataDatabricksInstanceProfiles#id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesConfig.property.instanceProfiles">instanceProfiles</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfiles">DataDatabricksInstanceProfilesInstanceProfiles</a>[]</code> | instance_profiles block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/instance_profiles#id DataDatabricksInstanceProfiles#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceProfiles`<sup>Optional</sup> <a name="instanceProfiles" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesConfig.property.instanceProfiles"></a>

```typescript
public readonly instanceProfiles: IResolvable | DataDatabricksInstanceProfilesInstanceProfiles[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfiles">DataDatabricksInstanceProfilesInstanceProfiles</a>[]

instance_profiles block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/instance_profiles#instance_profiles DataDatabricksInstanceProfiles#instance_profiles}

---

### DataDatabricksInstanceProfilesInstanceProfiles <a name="DataDatabricksInstanceProfilesInstanceProfiles" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfiles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfiles.Initializer"></a>

```typescript
import { dataDatabricksInstanceProfiles } from '@cdktf/provider-databricks'

const dataDatabricksInstanceProfilesInstanceProfiles: dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfiles = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfiles.property.arn">arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/instance_profiles#arn DataDatabricksInstanceProfiles#arn}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfiles.property.isMeta">isMeta</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/instance_profiles#is_meta DataDatabricksInstanceProfiles#is_meta}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfiles.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/instance_profiles#name DataDatabricksInstanceProfiles#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfiles.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/instance_profiles#role_arn DataDatabricksInstanceProfiles#role_arn}. |

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfiles.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/instance_profiles#arn DataDatabricksInstanceProfiles#arn}.

---

##### `isMeta`<sup>Optional</sup> <a name="isMeta" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfiles.property.isMeta"></a>

```typescript
public readonly isMeta: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/instance_profiles#is_meta DataDatabricksInstanceProfiles#is_meta}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfiles.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/instance_profiles#name DataDatabricksInstanceProfiles#name}.

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfiles.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/instance_profiles#role_arn DataDatabricksInstanceProfiles#role_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksInstanceProfilesInstanceProfilesList <a name="DataDatabricksInstanceProfilesInstanceProfilesList" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesList.Initializer"></a>

```typescript
import { dataDatabricksInstanceProfiles } from '@cdktf/provider-databricks'

new dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesList.get"></a>

```typescript
public get(index: number): DataDatabricksInstanceProfilesInstanceProfilesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfiles">DataDatabricksInstanceProfilesInstanceProfiles</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksInstanceProfilesInstanceProfiles[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfiles">DataDatabricksInstanceProfilesInstanceProfiles</a>[]

---


### DataDatabricksInstanceProfilesInstanceProfilesOutputReference <a name="DataDatabricksInstanceProfilesInstanceProfilesOutputReference" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.Initializer"></a>

```typescript
import { dataDatabricksInstanceProfiles } from '@cdktf/provider-databricks'

new dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.resetArn">resetArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.resetIsMeta">resetIsMeta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArn` <a name="resetArn" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.resetArn"></a>

```typescript
public resetArn(): void
```

##### `resetIsMeta` <a name="resetIsMeta" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.resetIsMeta"></a>

```typescript
public resetIsMeta(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.resetRoleArn"></a>

```typescript
public resetRoleArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.property.arnInput">arnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.property.isMetaInput">isMetaInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.property.isMeta">isMeta</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfiles">DataDatabricksInstanceProfilesInstanceProfiles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.property.arnInput"></a>

```typescript
public readonly arnInput: string;
```

- *Type:* string

---

##### `isMetaInput`<sup>Optional</sup> <a name="isMetaInput" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.property.isMetaInput"></a>

```typescript
public readonly isMetaInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `isMeta`<sup>Required</sup> <a name="isMeta" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.property.isMeta"></a>

```typescript
public readonly isMeta: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksInstanceProfilesInstanceProfiles;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfiles">DataDatabricksInstanceProfilesInstanceProfiles</a>

---



