# `dataDatabricksEntityTagAssignments` Submodule <a name="`dataDatabricksEntityTagAssignments` Submodule" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksEntityTagAssignments <a name="DataDatabricksEntityTagAssignments" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/entity_tag_assignments databricks_entity_tag_assignments}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.Initializer"></a>

```typescript
import { dataDatabricksEntityTagAssignments } from '@cdktf/provider-databricks'

new dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments(scope: Construct, id: string, config: DataDatabricksEntityTagAssignmentsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig">DataDatabricksEntityTagAssignmentsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig">DataDatabricksEntityTagAssignmentsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksEntityTagAssignments resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.isConstruct"></a>

```typescript
import { dataDatabricksEntityTagAssignments } from '@cdktf/provider-databricks'

dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.isTerraformElement"></a>

```typescript
import { dataDatabricksEntityTagAssignments } from '@cdktf/provider-databricks'

dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.isTerraformDataSource"></a>

```typescript
import { dataDatabricksEntityTagAssignments } from '@cdktf/provider-databricks'

dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.generateConfigForImport"></a>

```typescript
import { dataDatabricksEntityTagAssignments } from '@cdktf/provider-databricks'

dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataDatabricksEntityTagAssignments resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksEntityTagAssignments to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksEntityTagAssignments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/entity_tag_assignments#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksEntityTagAssignments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.tagAssignments">tagAssignments</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList">DataDatabricksEntityTagAssignmentsTagAssignmentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.entityNameInput">entityNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.entityTypeInput">entityTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.entityName">entityName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.entityType">entityType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `tagAssignments`<sup>Required</sup> <a name="tagAssignments" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.tagAssignments"></a>

```typescript
public readonly tagAssignments: DataDatabricksEntityTagAssignmentsTagAssignmentsList;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList">DataDatabricksEntityTagAssignmentsTagAssignmentsList</a>

---

##### `entityNameInput`<sup>Optional</sup> <a name="entityNameInput" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.entityNameInput"></a>

```typescript
public readonly entityNameInput: string;
```

- *Type:* string

---

##### `entityTypeInput`<sup>Optional</sup> <a name="entityTypeInput" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.entityTypeInput"></a>

```typescript
public readonly entityTypeInput: string;
```

- *Type:* string

---

##### `entityName`<sup>Required</sup> <a name="entityName" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.entityName"></a>

```typescript
public readonly entityName: string;
```

- *Type:* string

---

##### `entityType`<sup>Required</sup> <a name="entityType" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.entityType"></a>

```typescript
public readonly entityType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksEntityTagAssignmentsConfig <a name="DataDatabricksEntityTagAssignmentsConfig" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig.Initializer"></a>

```typescript
import { dataDatabricksEntityTagAssignments } from '@cdktf/provider-databricks'

const dataDatabricksEntityTagAssignmentsConfig: dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig.property.entityName">entityName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/entity_tag_assignments#entity_name DataDatabricksEntityTagAssignments#entity_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig.property.entityType">entityType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/entity_tag_assignments#entity_type DataDatabricksEntityTagAssignments#entity_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `entityName`<sup>Required</sup> <a name="entityName" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig.property.entityName"></a>

```typescript
public readonly entityName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/entity_tag_assignments#entity_name DataDatabricksEntityTagAssignments#entity_name}.

---

##### `entityType`<sup>Required</sup> <a name="entityType" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig.property.entityType"></a>

```typescript
public readonly entityType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/entity_tag_assignments#entity_type DataDatabricksEntityTagAssignments#entity_type}.

---

### DataDatabricksEntityTagAssignmentsTagAssignments <a name="DataDatabricksEntityTagAssignmentsTagAssignments" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignments.Initializer"></a>

```typescript
import { dataDatabricksEntityTagAssignments } from '@cdktf/provider-databricks'

const dataDatabricksEntityTagAssignmentsTagAssignments: dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignments = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignments.property.entityName">entityName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/entity_tag_assignments#entity_name DataDatabricksEntityTagAssignments#entity_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignments.property.entityType">entityType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/entity_tag_assignments#entity_type DataDatabricksEntityTagAssignments#entity_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignments.property.tagKey">tagKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/entity_tag_assignments#tag_key DataDatabricksEntityTagAssignments#tag_key}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignments.property.tagValue">tagValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/entity_tag_assignments#tag_value DataDatabricksEntityTagAssignments#tag_value}. |

---

##### `entityName`<sup>Required</sup> <a name="entityName" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignments.property.entityName"></a>

```typescript
public readonly entityName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/entity_tag_assignments#entity_name DataDatabricksEntityTagAssignments#entity_name}.

---

##### `entityType`<sup>Required</sup> <a name="entityType" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignments.property.entityType"></a>

```typescript
public readonly entityType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/entity_tag_assignments#entity_type DataDatabricksEntityTagAssignments#entity_type}.

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignments.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/entity_tag_assignments#tag_key DataDatabricksEntityTagAssignments#tag_key}.

---

##### `tagValue`<sup>Optional</sup> <a name="tagValue" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignments.property.tagValue"></a>

```typescript
public readonly tagValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/entity_tag_assignments#tag_value DataDatabricksEntityTagAssignments#tag_value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksEntityTagAssignmentsTagAssignmentsList <a name="DataDatabricksEntityTagAssignmentsTagAssignmentsList" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.Initializer"></a>

```typescript
import { dataDatabricksEntityTagAssignments } from '@cdktf/provider-databricks'

new dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.get"></a>

```typescript
public get(index: number): DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignments">DataDatabricksEntityTagAssignmentsTagAssignments</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksEntityTagAssignmentsTagAssignments[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignments">DataDatabricksEntityTagAssignmentsTagAssignments</a>[]

---


### DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference <a name="DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksEntityTagAssignments } from '@cdktf/provider-databricks'

new dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.resetTagValue">resetTagValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTagValue` <a name="resetTagValue" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.resetTagValue"></a>

```typescript
public resetTagValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.entityNameInput">entityNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.entityTypeInput">entityTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.tagKeyInput">tagKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.tagValueInput">tagValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.entityName">entityName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.entityType">entityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.tagKey">tagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.tagValue">tagValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignments">DataDatabricksEntityTagAssignmentsTagAssignments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `entityNameInput`<sup>Optional</sup> <a name="entityNameInput" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.entityNameInput"></a>

```typescript
public readonly entityNameInput: string;
```

- *Type:* string

---

##### `entityTypeInput`<sup>Optional</sup> <a name="entityTypeInput" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.entityTypeInput"></a>

```typescript
public readonly entityTypeInput: string;
```

- *Type:* string

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.tagKeyInput"></a>

```typescript
public readonly tagKeyInput: string;
```

- *Type:* string

---

##### `tagValueInput`<sup>Optional</sup> <a name="tagValueInput" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.tagValueInput"></a>

```typescript
public readonly tagValueInput: string;
```

- *Type:* string

---

##### `entityName`<sup>Required</sup> <a name="entityName" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.entityName"></a>

```typescript
public readonly entityName: string;
```

- *Type:* string

---

##### `entityType`<sup>Required</sup> <a name="entityType" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.entityType"></a>

```typescript
public readonly entityType: string;
```

- *Type:* string

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.tagValue"></a>

```typescript
public readonly tagValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksEntityTagAssignmentsTagAssignments;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignments">DataDatabricksEntityTagAssignmentsTagAssignments</a>

---



